import { useQuery } from '@tanstack/react-query';
import type { ProYouthText } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useProYouthText = () => {
  return useQuery({
    queryKey: ['pro-youth-text'],
    queryFn: async (): Promise<ProYouthText[]> => {
      const data = await apiClient.getProYouthText();
      return data;
    },
  });
};


