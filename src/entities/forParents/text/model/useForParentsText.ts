import { useQuery } from '@tanstack/react-query';
import type { ForParentsText } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useForParentsText = () => {
  return useQuery({
    queryKey: ['for-parents-text'],
    queryFn: async (): Promise<ForParentsText[]> => {
      const data = await apiClient.getForParentsText();
      return data;
    },
  });
};

