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
        <section
          className="flex flex-col items-center gap-8 py-16 md:flex-row">
          <div className="md:w-1/3">
            <div className="mb-4 flex items-center gap-2">
              <span className="font-mono text-gray-700">"[📅]"</span>
              <h2 className="text-2xl font-semibold">
                Анонсы и актуальные смены
              </h2>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
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
