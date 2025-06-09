import { HolidayCamp } from '@/pages/HolidayCamp';
import { Info } from '@pages/about/info';
import { About } from '@pages/about';
import { Main } from '@pages/main';
import { Projects } from '@pages/projects';
import { History } from '@pages/about/history';
import { Layout } from '@shared/layout';
import { Announcements } from '@/pages/HolidayCamp/announcements';
import { ForParents } from '@/pages/HolidayCamp/forParents';
import { MediaCenter } from '@/pages/HolidayCamp/mediaCenter';
import { TeachingStaff } from '@/pages/HolidayCamp/teachingStaff';
import { TechnicalBase } from '@/pages/HolidayCamp/technicalBase';
import { RecreationOrganizedGroups } from '@/pages/RecreationOrganizedGroups';
import { CostServices } from '@/pages/RecreationOrganizedGroups/costServices';
import { EntertainmentPrograms } from '@/pages/RecreationOrganizedGroups/entertainmentPrograms';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { Infrastructure } from '@pages/about/infrastructure';
import { Contacts } from '@pages/contacts';
import { Our } from '@/pages/projects/our';
import { Yours } from '@/pages/projects/yours';

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
        element: <History />,
      },
      {
        path: 'about/infrastructure',
        element: <Infrastructure />,
      },
      {
        path: 'about/safety',
        element: 'безопасность',
      },
      {
        path: '/recreationOrganizedGroups',
        element: <RecreationOrganizedGroups />,
      },
      {
        path: 'recreationOrganizedGroups/costServices',
        element: <CostServices />,
      },
      {
        path: 'recreationOrganizedGroups/entertainmentPrograms',
        element: <EntertainmentPrograms />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'projects/our',
        element: <Our />,
      },
      {
        path: 'projects/yours',
        element: <Yours />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
