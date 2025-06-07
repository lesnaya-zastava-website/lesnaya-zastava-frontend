import { CardAnnouncement } from '@/shared/ui/CardAnnouncement';
import { CardSection } from '@/shared/ui/CardSection';

export const CostServices: React.FC = () => {
  
  const announcement = [
    {
      title: '2500 ₽ "Летняя смена 2025"',
      content: 'В услугу входит: 3 дневное проживание, 3 разовое питание, ежедневные мероприятия и бассейн.',
      srcImg: '/pages/history/history1.png',
    },
    {
      title: '3500 ₽ "Творческая смена"',
      content: 'В услугу входит: 5 дневное проживание, 3 разовое питание, ежедневные мероприятия, бассейн и боулинг',
      srcImg: '/pages/about/infrastructure.png',
    },
    {
      title: '2500 ₽ "Летняя смена 2025"',
      content: 'В услугу входит: 3 дневное проживание, 3 разовое питание, ежедневные мероприятия и бассейн.',
      srcImg: '/pages/about/infrastructure.png',
    },
    {
      title: '3500 ₽ "Творческая смена"',
      content: 'В услугу входит: 5 дневное проживание, 3 разовое питание, ежедневные мероприятия, бассейн и боулинг',
      srcImg: '/pages/history/history1.png',
    }
  ];
  
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-b border-gray-200 pb-8">
        <CardSection
          icon="[💰]"
          title="Стоимость услуг"
          /*@ts-ignore*/
          Component={CardAnnouncement}
          data={announcement}
          isPositionLeft={true}
          isContainer={true}
        />
      </div>
    </section>
  );
};
