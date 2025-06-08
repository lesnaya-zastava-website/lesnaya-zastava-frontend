import { CardAnnouncement } from '@/shared/ui/CardAnnouncement';

export const EntertainmentPrograms: React.FC = () => {
  const announcement = [
    {
      title: '2500 ₽ "Летняя смена 2025"',
      content:
        'В услугу входит: 3 дневное проживание, 3 разовое питание, ежедневные мероприятия и бассейн.',
      srcImg: '/pages/history/history1.png',
    },
    {
      title: '3500 ₽ "Творческая смена"',
      content:
        'В услугу входит: 5 дневное проживание, 3 разовое питание, ежедневные мероприятия, бассейн и боулинг',
      srcImg: '/pages/about/infrastructure.png',
    },
    {
      title: '2500 ₽ "Летняя смена 2025"',
      content:
        'В услугу входит: 3 дневное проживание, 3 разовое питание, ежедневные мероприятия и бассейн.',
      srcImg: '/pages/about/infrastructure.png',
    },
    {
      title: '3500 ₽ "Творческая смена"',
      content:
        'В услугу входит: 5 дневное проживание, 3 разовое питание, ежедневные мероприятия, бассейн и боулинг',
      srcImg: '/pages/history/history1.png',
    },
  ];

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto pb-8">
        <section className="flex flex-col items-center gap-8 py-16 md:flex-row">
          <div className="md:w-1/3">
            <div className="mb-4 flex items-center gap-2">
              <span className="font-mono text-gray-700">[🎉]</span>
              <h2 className="text-2xl font-semibold">
                Развлекательные программы
              </h2>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {announcement.map((items, index) => (
                <CardAnnouncement
                  key={index}
                  {...items}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center gap-8 py-16 md:flex-row-reverse">
          <div className="md:w-1/3">
            <div className="mb-4 flex items-center gap-2">
              <span className="font-mono text-gray-700">[🎉]</span>
              <h2 className="text-2xl font-semibold">Актуальные предложения</h2>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
