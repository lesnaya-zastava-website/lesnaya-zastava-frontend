import { useMaevkaPosts } from '@/entities/projects/ourProjects/maevka/model/useMaevkaPosts';
import { MaevkaPostCard } from '@/entities/projects/ourProjects/maevka/ui/MaevkaPostCard';
import { PageHeading } from '@shared/PageHeading';

export const Maevka: React.FC = () => {
  const { data, isError, isLoading, isSuccess } = useMaevkaPosts();
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Семейный фестиваль "Маёвка"</PageHeading>

        <p className="pb-4">
          Семейный фестиваль "Маёвка" — Это прекрасная возможность провести
          время с семьей и друзьями, отдохнуть душой и телом на свежем воздухе и
          узнать, где и как будет отдыхать Ваш ребенок летом.
        </p>
        {isLoading && <p>Загрузка...</p>}

        {isError && <p className="text-red-500">Ошибка при загрузке.</p>}

        {!isLoading && !isError && data?.length === 0 && (
          <p className="mt-4">
            Новости, анонсы об этом проекте пока что отсутствуют.
          </p>
        )}

        <div className="grid grid-cols-1 gap-6">
          {isSuccess &&
            data?.map(item => <MaevkaPostCard maevkaPosts={item} />)}
        </div>
      </div>
    </section>
  );
};
