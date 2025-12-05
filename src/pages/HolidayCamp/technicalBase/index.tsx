import { useTechnicalBasePhoto } from '@/entities/technicalBase/photo/model/useTechnicalBasePhoto';
import { useTechnicalBaseText } from '@/entities/technicalBase/text/model/useTechnicalBaseText';
import { TechnicalBaseTextParagraph } from '@/entities/technicalBase/text/ui/TechnicalBaseTextParagraph';
import { GallerySlider } from '@/features/GallerySlider';
import { PageHeading } from '@/shared/ui/PageHeading';

export const TechnicalBase: React.FC = () => {
  const { data, isSuccess, isLoading, isError } = useTechnicalBaseText();

  const {
    data: dataPhotos,
    isSuccess: isSuccessPhotos,
    isLoading: isLoadingPhotos,
    isError: isErrorPhotos,
  } = useTechnicalBasePhoto();
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto pb-8">
        <section className="flex flex-col flex-wrap">
          <PageHeading>Материально-техническая база</PageHeading>
          <div className="mb-4 flex flex-col gap-3">
            {isLoading && <p>Загрузка...</p>}

            {isError && <p className="text-red-500">Ошибка при загрузке.</p>}

            {!isLoading && !isError && data?.length === 0 && (
              <p className="mt-4">Описание отсутствует.</p>
            )}
            {isSuccess &&
              data?.map(item => (
                <TechnicalBaseTextParagraph
                  key={item.id}
                  textItem={item}
                />
              ))}
          </div>
          {isLoadingPhotos && <p>Загрузка...</p>}

          {isErrorPhotos && (
            <p className="text-red-500">Ошибка при загрузке галереи</p>
          )}

          {!isLoadingPhotos && !isErrorPhotos && dataPhotos?.length === 0 && (
            <p className="mt-4">Фотографий пока нет.</p>
          )}

          {isSuccessPhotos && (
            <GallerySlider
              items={dataPhotos?.flatMap(item => item.photo)}
              getPhoto={photo => photo}
            />
          )}
        </section>
      </div>
    </section>
  );
};
