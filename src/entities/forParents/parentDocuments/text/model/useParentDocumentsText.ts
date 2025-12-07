import { useQuery } from '@tanstack/react-query';
import type { ParentDocumentsText } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useParentDocumentsText = () => {
  return useQuery({
    queryKey: ['parent-documents-text'],
    queryFn: async (): Promise<ParentDocumentsText[]> => {
      const data = await apiClient.getParentDocumentsText();
      return data;
    },
  });
};

