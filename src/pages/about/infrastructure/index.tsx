import { useInfrastructureGallery } from '@/entities/gallery/model/useInfrastructureGallery';
import { PhotoGallery } from '@/shared/ui/PhotoGallery';
import { PageHeading } from '@/shared/ui/PageHeading';
import MapInteractive from '@features/MapInteractive/ui';

export const Infrastructure: React.FC = () => {
  const { data, isLoading, isError, isSuccess } = useInfrastructureGallery();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Инфраструктура</PageHeading>
        <MapInteractive />
        <PageHeading>Фото территории</PageHeading>

        {isLoading && <p>Загрузка...</p>}

        {isError && (
          <p className="text-red-500">
            Ошибка при загрузке галереи инфраструктуры
          </p>
        )}

        {!isLoading && !isError && data?.length === 0 && (
          <p className="mt-4">Фотографий пока нет.</p>
        )}

        {isSuccess && (
          <PhotoGallery
            photos={data.flatMap(item => item.photos).map(photo => ({
              url: photo.url,
              name: photo.name,
            }))}
          />
        )}
      </div>
    </section>
  );
};
