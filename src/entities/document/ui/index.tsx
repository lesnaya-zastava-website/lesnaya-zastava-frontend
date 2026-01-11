import type { Document } from '@entities/document/model/useDocuments';
import { API_BASE_URL } from '@/shared/api/baseApi';

interface Props {
  document: Document;
}

export const DocumentCard: React.FC<Props> = ({ document }) => {
  return (
    <div className="mb-4 rounded border p-4 shadow">
      <h3 className="mb-2 text-lg font-semibold">{document.name}</h3>
      {document.file.map(file => (
        <a
          key={file.id}
          href={`${API_BASE_URL}${file.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline break-words">
          {file.name}
        </a>
      ))}
    </div>
  );
};
