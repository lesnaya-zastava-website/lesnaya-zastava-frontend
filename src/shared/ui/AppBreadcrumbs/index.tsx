import { useLocation, Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/shared/ui/components/ui/breadcrumb';
import { useForms } from '@/entities/forms/model/useForms';

const PATH_NAMES: Record<string, string> = {
  about: 'О центре',
  info: 'Основные сведения',
  docs: 'Документы',
  team: 'Наша команда',
  history: 'История',
  infrastructure: 'Инфраструктура',
  safety: 'Безопасность',
  holidaycamp: 'Детский отдых',
  announcements: 'Анонсы и актуальные смены',
  forParents: 'Информация для родителей',
  mediaCenter: 'Медиа-центр лагеря',
  teachingStaff: 'Педагогический состав',
  technicalBase: 'Материально-техническая база',
  recreationOrganizedGroups: 'Отдых для организованных групп детей',
  costServices: 'Стоимость услуг',
  entertainmentPrograms: 'Развлекательные программы',
  projects: 'Проекты и услуги',
  contacts: 'Контакты',
  our: 'Наши проекты',
  maevka: `Семейный фестиваль "Маёвка"`,
  ['pro-youth']: `Взрослая смена "Pro_Юность"`,
  yours: 'Ваши проекты',
  ['parent-things']: 'Список необходимых вещей',
  ['parent-documents']: 'Список необходимых документов',
  ['parent-rules']: `Правила пребывания в ДОЛ "Лесная застава"`,
  booking: 'Бронирование путёвок',
  actual: 'Актуальное',
  privacy: 'Политика обработки персональных данных'
};

export const AppBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);
  const { data: forms } = useForms();

  if (pathnames.length === 0) return null;

  // Проверяем, является ли последний сегмент documentId формы (путь /projects/booking/:formId)
  const isFormPage = pathnames.length >= 3 && 
                     pathnames[pathnames.length - 2] === 'booking';

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
          let label = PATH_NAMES[segment] || segment;

          // Если это documentId формы, заменяем на название формы
          if (isFormPage && index === pathnames.length - 1) {
            const form = forms?.find((f) => f.documentId === segment);
            if (form) {
              label = form.title;
            }
          }

          return (
            <span
              key={to}
              className="flex shrink-0 items-center">
              <BreadcrumbSeparator className="mx-2 list-none" />
              <BreadcrumbItem>
                {index === pathnames.length - 1 ? (
                  <span className="text-primary">{label}</span>
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
