import { useEntertainmentOffer } from '@entities/entertainmentPrograms/offer/model/useEntertainmentOffer';
import { useEntertainmentPrice } from '@entities/entertainmentPrograms/price/model/useEntertainmentPrice';
import { PageHeading } from '@/shared/ui/PageHeading';
import { PhotoGallery } from '@/shared/ui/PhotoGallery';
import { Loader } from '@/shared/ui/components/ui/loader';

export const EntertainmentPrograms: React.FC = () => {
  const {
    data: entertainmentPrices,
    isLoading: isLoadingPrices,
    isError: isErrorPrices,
    isSuccess: isSuccessPrices,
  } = useEntertainmentPrice();

  const {
    data: entertainmentOffers,
    isLoading: isLoadingOffers,
    isError: isErrorOffers,
    isSuccess: isSuccessOffers,
  } = useEntertainmentOffer();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <section className="flex flex-col gap-8 py-16">
          <PageHeading>
            Прайс развлекательных программ и дополнительных услуг
          </PageHeading>

          {isLoadingPrices && <Loader />}

          {isErrorPrices && (
            <p className="text-red-500">Ошибка при загрузке цен на услуги.</p>
          )}

          {!isLoadingPrices &&
            !isErrorPrices &&
            entertainmentPrices?.length === 0 && (
              <p className="mt-4">Цены на услуги пока что отсутствуют.</p>
            )}

          <PhotoGallery
            photos={
              isSuccessPrices
                ? entertainmentPrices?.flatMap(item =>
                    item.photo.map(p => ({
                      url: p.url,
                      name: p.name,
                    }))
                  ) || []
                : []
            }
          />
        </section>

        <section className="flex flex-col gap-8 py-16">
          <PageHeading>Актуальные предложения</PageHeading>

          {isLoadingOffers && <Loader />}

          {isErrorOffers && (
            <p className="text-red-500">Ошибка при загрузке цен на услуги.</p>
          )}

          {!isLoadingOffers &&
            !isErrorOffers &&
            entertainmentOffers?.length === 0 && (
              <p className="mt-4">Цены на услуги пока что отсутствуют.</p>
            )}

          <PhotoGallery
            photos={
              isSuccessOffers
                ? entertainmentOffers?.flatMap(item =>
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
