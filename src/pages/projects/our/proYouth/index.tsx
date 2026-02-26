import { useProYouthPosts } from '@/entities/projects/ourProjects/proYouth/model/useProYouthPosts';
import { useProYouthText } from '@/entities/projects/ourProjects/proYouth/text/model/useProYouthText';
import { PhotoGallery } from '@/shared/ui/PhotoGallery';
import { Loader } from '@/shared/ui/components/ui/loader';

export const ProYouth: React.FC = () => {
  const {
    data: dataText,
    isLoading: isLoadingText,
    isError: isErrorText,
    isSuccess: isSuccessText,
  } = useProYouthText();

  const {
    data: dataPhotos,
    isLoading: isLoadingPhotos,
    isError: isErrorPhotos,
    isSuccess: isSuccessPhotos,
  } = useProYouthPosts();

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
                dangerouslySetInnerHTML={{ __html: item.textHtml }}
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
