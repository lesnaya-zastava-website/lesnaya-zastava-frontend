import { RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { router } from '@app/router';
import { ThemeProvider } from '@/components/theme-provider';

const App: React.FC = () => {
  return (
    <ThemeProvider
      defaultTheme="system"
      storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
