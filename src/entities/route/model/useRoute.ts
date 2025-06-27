import { useQuery } from '@tanstack/react-query';
import type { Routes } from './types';
import { fetchRoute } from '@/shared/api/routeApi';

export const useRoute = () => {
  return useQuery({
    queryKey: ['routes'],
    queryFn: async (): Promise<Routes[]> => {
      const data = await fetchRoute();
      return data;
    },
  });
};
