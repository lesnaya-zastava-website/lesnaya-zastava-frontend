import { PageHeading } from '@/shared/ui/PageHeading';
import { CardAnnouncement } from '@/shared/ui/CardAnnouncement';
import { useAnnouncement } from '@/entities/announcement/model/useAnnouncement';


export const Announcements: React.FC = () => {
  const {
    data: AnnouncementResponse,
    isLoading,
    isError,
    isSuccess,
  } = useAnnouncement();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <section className="flex flex-col flex-wrap gap-8 py-16">
          <PageHeading>Анонсы и актуальные смены</PageHeading>

          {isLoading && <p>Загрузка...</p>}

          {isError && <p className="text-red-500">Ошибка при загрузке...</p>}

          {!isLoading && !isError && AnnouncementResponse?.length === 0 && (
            <p className="mt-4">Список анонсов отсутствует.</p>
          )}

          <div className="w-full">
            <div className="flex flex-col gap-6">
              {isSuccess && AnnouncementResponse?.map((item) => (
                <CardAnnouncement
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  photo={item.photo}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
