import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { findProduct } from './data/products';
import type { Lang } from './i18n';

export type Route =
  | { page: 'home'; lang: Lang; path: string }
  | { page: 'materials'; lang: Lang; path: string }
  | { page: 'product'; lang: Lang; path: string; slug: string }
  | { page: 'notfound'; lang: Lang; path: string };

/** Turns a URL path into a page. English pages have no prefix; Arabic pages start with /ar. */
export function parseRoute(rawPath: string): Route {
  let path = rawPath.split(/[?#]/)[0] || '/';
  if (path.length > 1) path = path.replace(/\/+$/, '');

  let lang: Lang = 'en';
  let rest = path;
  if (path === '/ar' || path.startsWith('/ar/')) {
    lang = 'ar';
    rest = path.slice(3) || '/';
  }

  if (rest === '/') return { page: 'home', lang, path };
  if (rest === '/building-materials') return { page: 'materials', lang, path };
  const match = rest.match(/^\/building-materials\/([a-z0-9-]+)$/);
  if (match && findProduct(match[1])) return { page: 'product', lang, path, slug: match[1] };
  return { page: 'notfound', lang, path };
}

/** The English path of a page (no /ar prefix), used to switch languages. */
export function basePath(route: Route) {
  if (route.page === 'home') return '/';
  if (route.page === 'materials') return '/building-materials';
  if (route.page === 'product') return `/building-materials/${route.slug}`;
  return '/';
}

type RouterValue = { route: Route; navigate: (to: string) => void };

const RouterContext = createContext<RouterValue | null>(null);

function scrollToHash(hash: string) {
  const el = hash ? document.getElementById(hash) : null;
  if (el) el.scrollIntoView({ block: 'start' });
  else window.scrollTo(0, 0);
}

export function RouterProvider({ initialPath, children }: { initialPath: string; children: ReactNode }) {
  const [path, setPath] = useState(initialPath);
  const [pendingHash, setPendingHash] = useState<string | null>(null);
  const route = useMemo(() => parseRoute(path), [path]);

  const navigate = useCallback(
    (to: string) => {
      const url = new URL(to, window.location.href);
      const hash = url.hash.slice(1);
      if (url.pathname === window.location.pathname) {
        window.history.pushState(null, '', url.pathname + url.search + url.hash);
        scrollToHash(hash);
        return;
      }
      window.history.pushState(null, '', url.pathname + url.search + url.hash);
      setPath(url.pathname);
      setPendingHash(hash);
    },
    [],
  );

  // After a page change, jump to the requested section or the top.
  useEffect(() => {
    if (pendingHash === null) return;
    scrollToHash(pendingHash);
    setPendingHash(null);
  }, [pendingHash, path]);

  useEffect(() => {
    const onPop = () => {
      setPath(window.location.pathname);
      setPendingHash(window.location.hash.slice(1));
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const value = useMemo(() => ({ route, navigate }), [route, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const value = useContext(RouterContext);
  if (!value) throw new Error('useRouter must be used inside RouterProvider');
  return value;
}

export const useRoute = () => useRouter().route;
export const useLang = () => useRouter().route.lang;

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

/** An internal link that changes page without a full reload. */
export function Link({ to, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();
  const handle = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      rest.target === '_blank'
    ) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return <a href={to} onClick={handle} {...rest} />;
}
