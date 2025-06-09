import { PageHeading } from '@/shared/PageHeading';
import { CardEmployee } from '@/shared/ui/CardEmployee';

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
    },
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
    },
  ];

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto pb-8">
        <section className="flex flex-col flex-wrap gap-8 py-16">
          <PageHeading>Педагогический состав</PageHeading>

          <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
              {teachers.map((items, index) => (
                <CardEmployee
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
