import { CardEmployee } from '@/shared/ui/CardEmployee';
import { CardSection } from '@/shared/ui/CardSection';

export const TeachingStaff: React.FC = () => {
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
    {
      fullName: 'Иванов Иван Иванович',
      post: 'Руководитель смены',
      qualification: 'Высшая квалификационная категория',
      specialization: 'Специализация: организация детского досуга',
      srcImg: '/vite.svg',
    },
    {
      fullName: 'Иванов Иван Иванович',
      post: 'Руководитель смены',
      qualification: 'Высшая квалификационная категория',
      specialization: 'Специализация: организация детского досуга',
      srcImg: '/vite.svg',
    },
    {
      fullName: 'Иванов Иван Иванович',
      post: 'Руководитель смены',
      qualification: 'Высшая квалификационная категория',
      specialization: 'Специализация: организация детского досуга',
      srcImg: '/vite.svg',
    }
  ];

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-b border-gray-200 pb-8">
          <CardSection
          icon="[👥]"
          title="Педагогический состав"
          /*@ts-ignore*/
          Component={CardEmployee}
          data={teachers}
          isPositionLeft={true}
          isContainer={false}
          isLoop={false}
        />
      </div>
    </section>
  );
};
