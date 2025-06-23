import { useEntertainmentOffer } from '@entities/entertainmentPrograms/offer/model/useEntertainmentOffer';
import { useEntertainmentPrice } from '@entities/entertainmentPrograms/price/model/useEntertainmentPrice';
import { EntertainmentPriceCard } from '@entities/entertainmentPrograms/price/ui/EntertainmentPriceCard';
import { PageHeading } from '@shared/PageHeading';
import { EntertainmentOfferCard } from '@entities/entertainmentPrograms/offer/ui/EntertainmentOfferCard';

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
      <div className="container mx-auto pb-8">
        <section className="flex flex-col gap-8 py-16">
          <PageHeading>
            Прайс развлекательных программ и дополнительных услуг
          </PageHeading>

          {isLoadingPrices && <p>Загрузка...</p>}

          {isErrorPrices && (
            <p className="text-red-500">Ошибка при загрузке цен на услуги.</p>
          )}

          {!isLoadingPrices &&
            !isErrorPrices &&
            entertainmentPrices?.length === 0 && (
              <p className="mt-4">Цены на услуги пока что отсутствуют.</p>
            )}

          <div className="flex flex-col gap-6">
            {isSuccessPrices &&
              entertainmentPrices?.map(item => (
                <EntertainmentPriceCard entertainmentPrice={item} />
              ))}
          </div>
        </section>

        <section className="flex flex-col gap-8 py-16">
          <PageHeading>Актуальные предложения</PageHeading>

          {isLoadingOffers && <p>Загрузка...</p>}

          {isErrorOffers && (
            <p className="text-red-500">Ошибка при загрузке цен на услуги.</p>
          )}

          {!isLoadingOffers &&
            !isErrorOffers &&
            entertainmentOffers?.length === 0 && (
              <p className="mt-4">Цены на услуги пока что отсутствуют.</p>
            )}

          <div className="flex flex-col gap-6">
            {isSuccessOffers &&
              entertainmentOffers?.map(item => (
                <EntertainmentOfferCard entertainmentOffer={item} />
              ))}
          </div>
        </section>
      </div>
    </section>
  );
};
