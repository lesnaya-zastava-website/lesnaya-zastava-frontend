import { useQuery } from '@tanstack/react-query';
import type { proYouthPosts } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useProYouthPosts = () => {
  return useQuery({
    queryKey: ['pro-youth'],
    queryFn: async (): Promise<proYouthPosts[]> => {
      const data = await apiClient.getProYouthPosts();
      return data;
    },
  });
};
