import { useProYouthPosts } from '@/entities/projects/ourProjects/proYouth/model/useProYouthPosts';
import { ProYouthPostCard } from '@/entities/projects/ourProjects/proYouth/ui/ProYouthPostCard';
import { PageHeading } from '@/shared/ui/PageHeading';

export const ProYouth: React.FC = () => {
  const { data, isError, isLoading, isSuccess } = useProYouthPosts();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Взрослая смена "Pro_Юность"</PageHeading>
        <p className="pb-4">
          PRO - юность — это проект который позволяет взрослым почувствовать
          себя детьми, завести новые знакомства и окунуться в атмосферу детского
          лагеря! Дружный отряд, крутые вожатые, зажигательные дискотеки и 5-ти
          разовое питание, что во взрослой жизни бывает достаточно редко.
          Отвлекись от рутины, бери друзей и приезжай к нам!
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
            data?.map(item => (
              <ProYouthPostCard
                key={item.id}
                proYouthPosts={item}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
