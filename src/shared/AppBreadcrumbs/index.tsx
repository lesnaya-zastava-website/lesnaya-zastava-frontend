import { useLocation, Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/shared/components/ui/breadcrumb';

const PATH_NAMES: Record<string, string> = {
  about: 'О центре',
  info: 'Основные сведения',
  docs: 'Документы',
  team: 'Наша команда',
  history: 'История',
  infrastructure: 'Инфраструктура',
  safety: 'Безопасность',
  holidaycamp: 'Детский отдых в каникулярное время',
  announcements: 'Ближайшие смены',
  forParents: 'Информация для родителей',
  mediaCenter: 'Медиа-центр лагеря',
  teachingStaff: 'Педагогический состав',
  technicalBase: 'Материально-техническая база',
  recreationOrganizedGroups: 'Отдых для организованных групп детей и молодежи',
  costServices: 'Стоимость услуг',
  entertainmentPrograms: 'Развлекательные программы',
  projects: 'Дополнительные проекты',
  contacts: 'Контакты',
  our: 'Наши проекты',
  yours: 'Ваши проекты',
};

export const AppBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (pathnames.length === 0) return null;

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <Breadcrumb className="container mx-auto flex items-center gap-y-2 overflow-x-auto py-3 text-sm whitespace-nowrap sm:text-base">
        <BreadcrumbItem className="shrink-0">
          <BreadcrumbLink asChild>
            <Link to="/">Главная</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathnames.map((segment, index) => {
          const to = '/' + pathnames.slice(0, index + 1).join('/');
          const label = PATH_NAMES[segment] || segment;

          return (
            <span
              key={to}
              className="flex shrink-0 items-center">
              <BreadcrumbSeparator className="mx-2 list-none" />
              <BreadcrumbItem>
                {index === pathnames.length - 1 ? (
                  <span className="text-muted-foreground">{label}</span>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={to}>{label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          );
        })}
      </Breadcrumb>
    </div>
  );
};
