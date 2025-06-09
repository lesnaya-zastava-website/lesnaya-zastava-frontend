import { PageHeading } from '@/shared/PageHeading';
import { CardAnnouncement } from '@/shared/ui/CardAnnouncement';

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
      <div className="container mx-auto pb-8">
        <section className="flex flex-col gap-8 py-16 flex-wrap">
          <PageHeading>Анонсы и актуальные смены</PageHeading>

          <div className="w-full">
            <div className="grid grid-cols-1 gap-6">
              {announcement.map((items, index) => (
                <CardAnnouncement
                  key={index}
                  {...items}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
