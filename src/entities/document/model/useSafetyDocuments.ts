import { useQuery } from '@tanstack/react-query';
import { fetchSafetyDocuments } from '@shared/api/documentsApi';

export interface DocumentFile {
  id: number;
  name: string;
  url: string;
  ext: string;
}

export interface Document {
  id: number;
  name: string;
  file: DocumentFile[];
}

export const useSafetyDocuments = () => {
  return useQuery({
    queryKey: ['safety-documents'],
    queryFn: async (): Promise<Document[]> => {
      const data = await fetchSafetyDocuments();
      return data.map((doc: any) => ({
        id: doc.id,
        name: doc.name,
        file: doc.file.map((file: any) => ({
          id: file.id,
          name: file.name,
          url: file.url,
          ext: file.ext,
        })),
      }));
    },
  });
};
