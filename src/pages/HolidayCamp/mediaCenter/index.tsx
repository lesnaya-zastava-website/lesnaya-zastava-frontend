import { CardMediaCenter } from '@/shared/ui/CardMediaCenter';
import { CardSection } from '@/shared/ui/CardSection';


export const MediaCenter: React.FC = () => {
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
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-b border-gray-200 pb-8">
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
      </div>
    </section>
  );
};
