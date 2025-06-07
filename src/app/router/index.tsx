import { HolidayCamp } from '@/pages/HolidayCamp';
import { Info } from '@pages/about/info';
import { About } from '@pages/about';
import { Main } from '@pages/main';
import { Layout } from '@shared/layout';
import { Announcements } from '@/pages/HolidayCamp/announcements';
import { ForParents } from '@/pages/HolidayCamp/forParents';
import { MediaCenter } from '@/pages/HolidayCamp/mediaCenter';
import { TeachingStaff } from '@/pages/HolidayCamp/teachingStaff';
import { TechnicalBase } from '@/pages/HolidayCamp/technicalBase';
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
        path: '/holidaycamp',
        element: <HolidayCamp />,
      },
      {
        path: 'holidaycamp/announcements',
        element: <Announcements />,
      },
      {
        path: 'holidaycamp/forParents',
        element: <ForParents />,
      },
      {
        path: 'holidaycamp/mediaCenter',
        element: <MediaCenter />,
      },
      {
        path: 'holidaycamp/teachingStaff',
        element: <TeachingStaff />,
      },
      {
        path: 'holidaycamp/technicalBase',
        element: <TechnicalBase />,
      },
      {
        path: 'holidaycamp/infrastructure',
        element: 'инфраструктура',
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
