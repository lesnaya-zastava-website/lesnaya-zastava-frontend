import { useInfrastructureGallery } from '@/entities/gallery/model/useInfrastructureGallery';
import { GallerySlider } from '@/features/GallerySlider';
import { PageHeading } from '@/shared/PageHeading';
import MapInteractive from '@features/MapInteractive/ui';

export const Infrastructure: React.FC = () => {
  const { data, isLoading, isError, isSuccess } = useInfrastructureGallery();

  console.log(data);

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto py-5">
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

        {isSuccess && <GallerySlider photos={data[0].photos} />}

      
      </div>
    </section>
  );
};
