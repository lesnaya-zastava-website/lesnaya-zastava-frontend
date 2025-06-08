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
    }
  ];

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto  pb-8">
        <section className="flex flex-col items-center gap-8 py-16 md:flex-row">
          <div className="md:w-1/3">
            <div className="mb-4 flex items-center gap-2">
              <span className="font-mono text-gray-700">[👥]</span>
              <h2 className="text-2xl font-semibold">Педагогический состав</h2>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
