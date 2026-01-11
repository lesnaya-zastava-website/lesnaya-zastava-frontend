import { useMaevkaPosts } from '@/entities/projects/ourProjects/maevka/model/useMaevkaPosts';
import { useMaevkaText } from '@/entities/projects/ourProjects/maevka/text/model/useMaevkaText';
import { PhotoGallery } from '@/shared/ui/PhotoGallery';
import { Loader } from '@/shared/ui/components/ui/loader';
import { processCkeditorHtml } from '@/lib/utils';

export const Maevka: React.FC = () => {
  const {
    data: dataText,
    isLoading: isLoadingText,
    isError: isErrorText,
    isSuccess: isSuccessText,
  } = useMaevkaText();

  const {
    data: dataPhotos,
    isLoading: isLoadingPhotos,
    isError: isErrorPhotos,
    isSuccess: isSuccessPhotos,
  } = useMaevkaPosts();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <div className="mb-4 flex flex-col gap-3">
          {isLoadingText && <Loader />}

          {isErrorText && (
            <p className="text-red-500">Ошибка при загрузке текста</p>
          )}

          {!isLoadingText && !isErrorText && dataText?.length === 0 && (
            <p className="mt-4">Текст отсутствует.</p>
          )}

          {isSuccessText &&
            dataText?.map(item => (
              <div
                key={item.id}
                className="styled-html-content"
                dangerouslySetInnerHTML={{ __html: processCkeditorHtml(item.textHtml) }}
              />
            ))}
        </div>

        {isLoadingPhotos && <Loader />}

        {isErrorPhotos && (
          <p className="text-red-500">Ошибка при загрузке фотографий</p>
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
      </div>
    </section>
  );
};
