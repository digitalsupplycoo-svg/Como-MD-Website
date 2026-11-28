import { useEffect } from 'react';
import BoqBand from './components/BoqBand';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import Materials from './pages/Materials';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import { RouterProvider, useRoute } from './router';
import { applyHead, getHead } from './seo';

function Page() {
  const route = useRoute();

  // Keep the head tags in step with the page after in-app navigation.
  useEffect(() => {
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    applyHead(getHead(route, canonical ? new URL(canonical.href).origin : window.location.origin));
  }, [route]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        {route.page === 'home' && <Home />}
        {route.page === 'materials' && <Materials />}
        {route.page === 'product' && <Product key={route.slug} slug={route.slug} />}
        {route.page === 'notfound' && <NotFound />}
      </main>
      <BoqBand />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function App({ path }: { path: string }) {
  return (
    <RouterProvider initialPath={path}>
      <Page />
    </RouterProvider>
  );
}
