import { useQuery } from '@tanstack/react-query';
import type { maevkaPosts } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useMaevkaPosts = () => {
  return useQuery({
    queryKey: ['maevka'],
    queryFn: async (): Promise<maevkaPosts[]> => {
      const data = await apiClient.getMaevkaPosts();
      return data;
    },
  });
};
