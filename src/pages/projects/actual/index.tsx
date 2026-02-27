import { useEntertainmentOffer } from '@entities/entertainmentPrograms/offer/model/useEntertainmentOffer';
import { PageHeading } from '@/shared/ui/PageHeading';
import { PhotoGallery } from '@/shared/ui/PhotoGallery';
import { Loader } from '@/shared/ui/components/ui/loader';

export const Actual: React.FC = () => {
  const {
    data: entertainmentOffers,
    isLoading,
    isError,
    isSuccess,
  } = useEntertainmentOffer();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Актуальные предложения</PageHeading>

        {isLoading && <Loader />}

        {isError && (
          <p className="text-red-500">Ошибка при загрузке предложений.</p>
        )}

        {!isLoading && !isError && entertainmentOffers?.length === 0 && (
          <p className="mt-4">Актуальные предложения пока отсутствуют.</p>
        )}

        {isSuccess && (
          <PhotoGallery
            photos={
              entertainmentOffers?.flatMap(item =>
                item.photo.map(p => ({
                  url: p.url,
                  name: p.name,
                }))
              ) || []
            }
          />
        )}
      </div>
    </section>
  );
};
