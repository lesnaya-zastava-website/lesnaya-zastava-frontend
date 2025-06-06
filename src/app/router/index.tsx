import { ChildrenHolidaysDuringHolidays } from '@pages/ChildrenHolidaysDuringHolidays';
import { Info } from '@pages/about/info';
import { About } from '@pages/about';
import { Main } from '@pages/main';
import { Layout } from '@shared/layout';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/ChildrenHolidaysDuringHolidays',
        element: <ChildrenHolidaysDuringHolidays/>
      },
      {
        path: '/admin',
        element: '(Админ панель)',
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'about/info',
        element: <Info />,
      },
      {
        path: 'about/docs',
        element: 'документы',
      },
      {
        path: 'about/team',
        element: 'команда',
      },
      {
        path: 'about/history',
        element: 'история',
      },
      {
        path: 'about/infrastructure',
        element: 'инфраструктура',
      },
      {
        path: 'about/safety',
        element: 'безопасность',
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
