import { useHistoryPhotos } from '@/entities/history/model/useHistoryPhotos';
import { useHistoryText } from '@/entities/history/text/model/useHistoryText';
import { PhotoGallery } from '@/shared/ui/PhotoGallery';
import { Loader } from '@/shared/ui/components/ui/loader';
import { CkeditorHtml } from '@/shared/ui/CkeditorHtml';

export const History: React.FC = () => {
  const {
    data: dataText,
    isLoading: isLoadingText,
    isError: isErrorText,
    isSuccess: isSuccessText,
  } = useHistoryText();

  const {
    data: dataPhotos,
    isLoading: isLoadingPhotos,
    isError: isErrorPhotos,
    isSuccess: isSuccessPhotos,
  } = useHistoryPhotos();

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
              <CkeditorHtml
                key={item.id}
                html={item.textHtml}
                className="styled-html-content"
              />
            ))}
        </div>

        {isLoadingPhotos && <Loader />}

        {isErrorPhotos && (
          <p className="text-red-500">Ошибка при загрузке галереи</p>
        )}

        {!isLoadingPhotos && !isErrorPhotos && dataPhotos?.length === 0 && (
          <p className="mt-4">Фотографий пока нет.</p>
        )}

        {isSuccessPhotos && (
          <PhotoGallery
            photos={dataPhotos?.flatMap(item => item.photo).map(photo => ({
              url: photo.url,
              name: photo.name,
            })) || []}
          />
        )}
      </div>
    </section>
  );
};
