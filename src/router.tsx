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

export type Route =
  | { page: 'home'; path: string }
  | { page: 'materials'; path: string }
  | { page: 'product'; path: string; slug: string }
  | { page: 'notfound'; path: string };

/** Turns a URL path into a page. */
export function parseRoute(rawPath: string): Route {
  let path = rawPath.split(/[?#]/)[0] || '/';
  if (path.length > 1) path = path.replace(/\/+$/, '') || '/';

  if (path === '/') return { page: 'home', path };
  if (path === '/building-materials') return { page: 'materials', path };
  const match = path.match(/^\/building-materials\/([a-z0-9-]+)$/);
  if (match && findProduct(match[1])) return { page: 'product', path, slug: match[1] };
  return { page: 'notfound', path };
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

  const navigate = useCallback((to: string) => {
    const url = new URL(to, window.location.href);
    const hash = url.hash.slice(1);
    const samePage = url.pathname === window.location.pathname;
    // Clicking a link to the page you are on should not add another Back step.
    if (url.href !== window.location.href) window.history.pushState(null, '', url.pathname + url.search + url.hash);
    if (samePage) {
      scrollToHash(hash);
      return;
    }
    setPath(url.pathname);
    setPendingHash(hash);
  }, []);

  // After a page change, jump to the requested section or the top.
  useEffect(() => {
    if (pendingHash === null) return;
    scrollToHash(pendingHash);
    setPendingHash(null);
  }, [pendingHash, path]);

  useEffect(() => {
    const onPop = () => {
      setPath(window.location.pathname);
      // Without a hash, let the browser restore the scroll position of that history entry.
      const hash = window.location.hash.slice(1);
      if (hash) setPendingHash(hash);
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
