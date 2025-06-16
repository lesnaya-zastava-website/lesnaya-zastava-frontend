import { RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { router } from '@app/router';
import { ThemeProvider } from '@/shared/components/theme-provider';
import { TanStackQueryProvider } from './tanstackProvider';

const App: React.FC = () => {
  return (
    <TanStackQueryProvider>
      <ThemeProvider
        defaultTheme="system"
        storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </TanStackQueryProvider>
  );
};

export default App;
