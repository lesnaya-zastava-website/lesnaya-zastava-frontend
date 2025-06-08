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
        <section className="flex flex-col items-center gap-8 py-16 md:flex-row">
          <div className="md:w-1/3">
            <div className="mb-4 flex items-center gap-2">
              <span className="font-mono text-gray-700">[📷]</span>
              <h2 className="text-2xl font-semibold">Медиа-центр лагеря</h2>
            </div>
          </div>
          <div className="md:w-2/3">
            <CardMediaCenter dataMedia={dataMedia} />
          </div>
        </section>
      </div>
    </section>
  );
};
