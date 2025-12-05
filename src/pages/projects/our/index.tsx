import { useOurProjects } from '@/entities/projects/ourProjects/model/useOurProjects';
import { API_BASE_URL } from '@/shared/api/baseApi';
import { Button } from '@/shared/ui/components/ui/button';
import { Card, CardContent, CardTitle } from '@/shared/ui/components/ui/card';
import { PageHeading } from '@/shared/ui/PageHeading';
import { Link } from 'react-router-dom';

export const Our: React.FC = () => {
  const { data, isError, isLoading, isSuccess } = useOurProjects();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Наши проекты</PageHeading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {isLoading && <p>Загрузка...</p>}

          {isError && <p className="text-red-500">Ошибка при загрузке.</p>}

          {!isLoading && !isError && data?.length === 0 && (
            <p className="mt-4">Разделы отсутствуют.</p>
          )}
          {isSuccess &&
            data.map(item => (
              <Card key={item.id}>
                <CardContent className="flex flex-col gap-4 text-center">
                  <img
                    className="max-w-full"
                    alt={item.title}
                    src={`${API_BASE_URL}${item?.photo?.url}`}
                  />
                  <CardTitle>{item.title}</CardTitle>
                  <Link to={item.slug}>
                    <Button>Подробнее</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};
