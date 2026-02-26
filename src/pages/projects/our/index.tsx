import { useOurProjects } from '@/entities/projects/ourProjects/model/useOurProjects';
import { API_BASE_URL } from '@/shared/api/baseApi';
import { Button } from '@/shared/ui/components/ui/button';
import { Card, CardContent, CardTitle } from '@/shared/ui/components/ui/card';
import { PageHeading } from '@/shared/ui/PageHeading';
import { Link } from 'react-router-dom';
import { Loader } from '@/shared/ui/components/ui/loader';
import { ImageWithLoader } from '@/shared/ui/components/ui/image-with-loader';

export const Our: React.FC = () => {
  const { data, isError, isLoading, isSuccess } = useOurProjects();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Наши проекты</PageHeading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {isLoading && <Loader />}

          {isError && <p className="text-red-500">Ошибка при загрузке.</p>}

          {!isLoading && !isError && data?.length === 0 && (
            <p className="mt-4">Разделы отсутствуют.</p>
          )}
          {isSuccess &&
            data.map(item => (
              <Card key={item.id} className="flex flex-col">
                <CardContent className="flex flex-1 flex-col items-center gap-4 text-center">
                  <div className="w-full overflow-hidden rounded-md">
                    <ImageWithLoader
                      className="h-auto w-full object-contain"
                      alt={item.title}
                      src={`${API_BASE_URL}${item?.photo?.url}`}
                    />
                  </div>
                  <CardTitle className="flex-1">{item.title}</CardTitle>
                  <Link
                    to={item.slug}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
