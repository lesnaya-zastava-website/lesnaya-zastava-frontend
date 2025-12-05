import { PageHeading } from '@/shared/ui/PageHeading';
import { useDocuments } from '@/entities/document/model/useDocuments';
import { DocumentCard } from '@/entities/document/ui';

export const Documents: React.FC = () => {
  const { data: documents, isLoading, isError } = useDocuments();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Документы</PageHeading>

        {isLoading && <p>Загрузка...</p>}

        {isError && (
          <p className="text-red-500">Ошибка при загрузке документов</p>
        )}

        {!isLoading && !isError && documents?.length === 0 && (
          <p className="mt-4">Документов пока нет.</p>
        )}

        {documents && (
          <div className="mt-6">
            {documents.map(doc => (
              <DocumentCard
                key={doc.id}
                document={doc}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
