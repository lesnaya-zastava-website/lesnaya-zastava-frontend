import { useTeacher } from '@/entities/person/model/useTeacher';
import { TeacherCard } from '@/entities/person/ui/TeacherCard';
import { PageHeading } from '@/shared/PageHeading';

export const TeachingStaff: React.FC = () => {
  const { data: teachers, isLoading, isError } = useTeacher();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto pb-8">
        <section className="flex flex-col flex-wrap gap-8 py-16">
          <PageHeading>Педагогический состав</PageHeading>

          {isLoading && <p>Загрузка...</p>}

          {isError && <p className="text-red-500">Ошибка при загрузке...</p>}

          {!isLoading && !isError && teachers?.length === 0 && (
            <p className="mt-4">Список преподавателей отсутствует.</p>
          )}

          <div className="w-full">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {teachers?.map(teacher => <TeacherCard teacher={teacher} />)}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
