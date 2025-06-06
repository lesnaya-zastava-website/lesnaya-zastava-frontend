import { Main } from '@pages/main';
import { ChildrenHolidaysDuringHolidays } from '@pages/ChildrenHolidaysDuringHolidays';
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
        path: 'test',
        element: 'тест маршрута',
      },
      {
        path: '/ChildrenHolidaysDuringHolidays',
        element: <ChildrenHolidaysDuringHolidays/>
      },
    ],
  },
  {
    path: '/admin',
    element: '(Админ панель)',
  },
];

export const router = createBrowserRouter(routes);
