import { useServicePrices } from '@entities/service/model/useServicePrices';
import { PageHeading } from '@/shared/ui/PageHeading';
import { PhotoGallery } from '@/shared/ui/PhotoGallery';

export const CostServices: React.FC = () => {
  const { data, isError, isLoading, isSuccess } = useServicePrices();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <section className="flex flex-col gap-8 py-16">
          <PageHeading>Стоимость услуг</PageHeading>

          {isLoading && <p>Загрузка...</p>}

          {isError && (
            <p className="text-red-500">Ошибка при загрузке цен на услуги.</p>
          )}

          {!isLoading && !isError && data?.length === 0 && (
            <p className="mt-4">Цены на услуги пока что отсутствуют.</p>
          )}

          <PhotoGallery
            photos={
              isSuccess
                ? data?.flatMap(item =>
                    item.photo.map(p => ({
                      url: p.url,
                      name: p.name,
                    }))
                  ) || []
                : []
            }
          />
        </section>
      </div>
    </section>
  );
};
