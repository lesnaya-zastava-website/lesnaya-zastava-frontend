import { useTechnicalBasePhoto } from '@/entities/technicalBase/photo/model/useTechnicalBasePhoto';
import { useTechnicalBaseText } from '@/entities/technicalBase/text/model/useTechnicalBaseText';
import { PhotoGallery } from '@/shared/ui/PhotoGallery';

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
      <div className="container mx-auto border-t border-gray-200 py-5">
        <section className="flex flex-col flex-wrap">
          <div className="mb-4 flex flex-col gap-3">
            {isLoading && <p>Загрузка...</p>}

            {isError && <p className="text-red-500">Ошибка при загрузке.</p>}

            {!isLoading && !isError && data?.length === 0 && (
              <p className="mt-4">Описание отсутствует.</p>
            )}

            {isSuccess &&
              data?.map(item => (
                <div
                  key={item.id}
                  className="styled-html-content"
                  dangerouslySetInnerHTML={{ __html: item.textHtml }}
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
            <PhotoGallery
              photos={
                dataPhotos?.flatMap(item =>
                  item.photo.map(p => ({
                    url: p.url,
                    name: p.name,
                  }))
                ) || []
              }
            />
          )}
        </section>
      </div>
    </section>
  );
};
