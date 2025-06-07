import { CardAnnouncement } from '@/shared/ui/CardAnnouncement';
import { CardSection } from '@/shared/ui/CardSection';

export const Announcements: React.FC = () => {
  const announcement = [
    {
      title: 'Летняя смена 2025',
      content: '10 июня - 24 июня',
      srcImg: '/vite.svg',
    },
    {
      title: 'Творческая смена',
      content: '1 июля - 15 июля',
      srcImg: '/vite.svg',
    },
    {
      title: 'Летняя смена 2025',
      content: '10 июня - 24 июня',
      srcImg: '/vite.svg',
    },
    {
      title: 'Творческая смена',
      content: '1 июля - 15 июля',
      srcImg: '/vite.svg',
    },
  ];

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-b border-gray-200 pb-8">
        <CardSection
          icon="[📅]"
          title="Анонсы и актуальные смены"
          /*@ts-ignore*/
          Component={CardAnnouncement}
          data={announcement}
          isPositionLeft={true}
          isContainer={true}
          isLoop={false}
        />
      </div>
    </section>
  );
};
