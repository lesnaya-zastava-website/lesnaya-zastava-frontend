import { useQuery } from '@tanstack/react-query';
import type { Routes } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useRoute = () => {
  return useQuery({
    queryKey: ['routes'],
    queryFn: async (): Promise<Routes[]> => {
      const data = await apiClient.getRoute();
      return data;
    },
  });
};
