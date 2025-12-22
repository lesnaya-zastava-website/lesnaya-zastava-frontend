import { useContactsText } from '@/entities/contacts/text/model/useContactsText';

export const Contacts: React.FC = () => {
  const {
    data: contactsData,
    isLoading: contactsLoading,
    isError: contactsError,
    isSuccess: contactsSuccess,
  } = useContactsText();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <div className="mb-4 flex flex-col gap-3">
          {contactsLoading && <p>Загрузка...</p>}

          {contactsError && (
            <p className="text-red-500">Ошибка при загрузке страницы контактов.</p>
          )}

          {!contactsLoading && !contactsError && contactsData?.length === 0 && (
            <p className="mt-4">Контакты отсутствуют.</p>
          )}

          {contactsSuccess &&
            contactsData?.map(item => (
              <div
                key={item.id}
                className="styled-html-content"
                dangerouslySetInnerHTML={{ __html: item.textHtml }}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
