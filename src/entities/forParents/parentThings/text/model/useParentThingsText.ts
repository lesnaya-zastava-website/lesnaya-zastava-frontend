import { useQuery } from '@tanstack/react-query';
import type { ParentThingsText } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useParentThingsText = () => {
  return useQuery({
    queryKey: ['parent-things-text'],
    queryFn: async (): Promise<ParentThingsText[]> => {
      const data = await apiClient.getParentThingsText();
      return data;
    },
  });
};

