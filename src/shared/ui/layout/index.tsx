import { Outlet } from 'react-router-dom';
import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';
import { AppBreadcrumbs } from '@/shared/ui/AppBreadcrumbs';
import ScrollToTopButton from '@features/ScrollToTopButton';
import { CookieBanner } from '../CookieBanner';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />

      <AppBreadcrumbs />
      <ScrollToTopButton />
      <Outlet />

      <CookieBanner/>

      <Footer />
    </>
  );
};
