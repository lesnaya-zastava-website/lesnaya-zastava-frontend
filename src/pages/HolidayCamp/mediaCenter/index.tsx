import { PageHeading } from '@/shared/PageHeading';
import { CardMediaCenter } from '@/shared/ui/CardMediaCenter';

export const MediaCenter: React.FC = () => {
  const dataMedia = [
    {
      srcImg: '/vite.svg',
      altImg: undefined,
      date: '15 мая 2025',
      title: 'Открытие летнего сезона 2025!',
      message: 'Приглашаем всех на открытие летнего сезона в нашем лагере!',
    },
    {
      srcImg: '/vite.svg',
      altImg: undefined,
      date: '10 мая 2025',
      title: 'Новая программа "Юный исследователь"',
      message: 'Представляем новую образовательную программу этого лета!',
    },
  ];

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto pb-8">
        <section className="flex flex-col gap-8 py-16">
          <PageHeading>Медиа-центр лагеря</PageHeading>
          <CardMediaCenter dataMedia={dataMedia} />
        </section>
      </div>
    </section>
  );
};
