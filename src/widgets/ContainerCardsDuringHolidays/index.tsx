import { CardAnnouncement } from '@/shared/ui/CardAnnouncement';
import { CardEmployee } from '@/shared/ui/CardEmployee';
import { CardLink } from '@/shared/ui/CardLink';
import { CardMediaCenter } from '@/shared/ui/CardMediaCenter';
import { CardTechnicalBase } from '@/shared/ui/CardTechnicalBase';
import { CardCollection } from '@/shared/ui/CardCollection';
import { CardSection } from '@/shared/ui/CardSection';

export const ContainerCardsDuringHolidays: React.FC = () => {
  /** Формат данных для работы с компонентами */

  const announcement = [
    {
      title: 'Летняя смена 2025',
      date: '10 июня - 24 июня',
      srcImg: '/vite.svg',
    },
    {
      title: 'Творческая смена',
      date: '1 июля - 15 июля',
      srcImg: '/vite.svg',
    },
    {
      title: 'Летняя смена 2025',
      date: '10 июня - 24 июня',
      srcImg: '/vite.svg',
    },
    {
      title: 'Творческая смена',
      date: '1 июля - 15 июля',
      srcImg: '/vite.svg',
    },
  ];

  const teachers = [
    {
      fullName: 'Петрова Мария Сергеевна',
      post: 'Воспитатель',
      qualification: 'Первая квалификационная категория',
      specialization: 'Специализация: творческое развитие',
      srcImg: '/vite.svg',
    },
    {
      fullName: 'Иванов Иван Иванович',
      post: 'Руководитель смены',
      qualification: 'Высшая квалификационная категория',
      specialization: 'Специализация: организация детского досуга',
      srcImg: '/vite.svg',
    },
  ];

  const material = {
    data: [
      {
        title: 'Информация о вводе в эксплуатацию',
        content:
          'Наш лагерь был введен в эксплуатацию в 2010 году и полностью реновирован в 2023 году. Все помещения соответствуют современным требованиям безопасности и комфорта.',
      },
      {
        title: 'Сведения об условиях питания детей',
        content:
          'Питание организовано 5 раз в день в современной столовой на 200 посадочных мест. Меню разработано с учетом возрастных особенностей детей и согласовано с Роспотребнадзором.',
      },
      {
        title: 'О наличии оборудованных учебных кабинетах',
        content:
          'В лагере имеются 10 полностью оборудованных учебных кабинетов для проведения мастер-классов и занятий. Каждый кабинет оснащен современным оборудованием и материалами.',
      },
      {
        title: 'Объекты для проведения практических занятий',
        content:
          'На территории лагеря расположены специализированные площадки для проведения практических занятий: творческая мастерская, научная лаборатория, спортивные площадки.',
      },
      {
        title: 'Библиотек и объектах спорта. о бассейне',
        content:
          'На территории лагеря расположены специализированные площадки для проведения спортивных мероприятий.',
      },
      {
        title: 'О медицинском сопровождении',
        content:
          'Лагерь оснащен современным медицинским оснащением для оказании первой помощи',
      }
    ],
    srcImg: '/vite.svg',
  };

  const cardLink = {
    title: 'Подробная информация об инфраструктуре лагеря',
    contentCard:
      'На отдельной странице вы можете ознакомиться с подробной информацией об условиях проживания и инфраструктуре нашего лагеря, включая фотографии жилых корпусов, столовой, спортивных и творческих площадок.',
    contentLink: 'Перейти на страницу Инфраструктуры',
  };

  const parents = {
    costInRub: 2000,
    dataEnum: [
      {
        title: 'Документы для заезда',
        dataEnum: [
          'Свидетельство о рождении / паспорт',
          'Медицинская справка (форма 079/у)',
          'Справка об отсутствии контактов с инфекционными больными',
          'Копия полиса ОМС',
        ],
      },
      {
        title: 'Чек-лист вещей',
        dataEnum: [
          'Одежда по сезону (минимум 3 комплекта)',
          'Спортивная форма',
          'Купальные принадлежности',
          'Средства личной гигиены',
        ],
      },
      {
        title: 'Статьи для родителей',
        dataEnum: [
          'Устав лагеря'
        ],
      },
      {
        title: 'Распорядок дня',
        dataEnum: [
          'Подъем 8:00',
          'Зарядка 8:20',
          'Обед 9:00',
          'Отъбой 19:00'
        ],
      }

    ],
    dataInfo: [
      {
        title: 'Памятка заботы для родителя',
        content:
          'Рекомендации по подготовке ребенка к лагерю, советы по адаптации и поддержке.',
      },
      {
        title: 'Правила пребывания в ДОЛ',
        content:
          'Ознакомьтесь с правилами пребывания в детском оздоровительном лагере. Соблюдение этих правил обеспечит безопасность и комфорт вашего ребенка.',
      },
    ],
  };

  const media = {
    dataMedia: [
      {
        srcImg: '/vite.svg',
        date: '15 мая 2025',
        title: 'Открытие летнего сезона 2025!',
        message: 'Приглашаем всех на открытие летнего сезона в нашем лагере!'
      },
      {
        srcImg: '/vite.svg',
        date: '10 мая 2025',
        title: 'Новая программа "Юный исследователь"',
        message: 'Представляем новую образовательную программу этого лета!'
      },
    ]
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <CardSection
          icon="[📅]"
          title="Анонсы и актуальные смены"
          /*@ts-ignore*/
          Component={CardAnnouncement}
          data={announcement}
          isPositionLeft={true}
          isContainer={true}
        />

        <CardSection
          icon="[👥]"
          title="Педагогический состав"
          /*@ts-ignore*/
          Component={CardEmployee}
          data={teachers}
          isPositionLeft={false}
          isContainer={false}
        />

        <CardSection
          icon="[🏢]"
          title="Материально-техническая база"
          /*@ts-ignore*/
          Component={CardTechnicalBase}
          data={material}
          isPositionLeft={true}
          isContainer={false}
          isLoop={false}
        />

        <CardSection
          icon="[📋]"
          title="Информация для родителей"
          /*@ts-ignore*/
          Component={CardCollection}
          data={parents}
          isPositionLeft={false}
          isContainer={true}
          isLoop={false}
        />

         <CardSection
          icon="[📷]"
          title="Медиа-центр лагеря"
          /*@ts-ignore*/
          Component={CardMediaCenter}
          data={media}
          isPositionLeft={true}
          isContainer={false}
          isLoop={false}
        />

        <CardSection
          icon="[🏠]"
          title="Условия проживания и инфраструктура"
          /*@ts-ignore*/
          Component={CardLink}
          data={cardLink}
          isPositionLeft={false}
          isContainer={false}
          isLoop={false}
        />
      </div>
    </div>
  );
};
