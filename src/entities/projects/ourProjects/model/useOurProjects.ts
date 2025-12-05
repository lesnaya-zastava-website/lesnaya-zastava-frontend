import { useQuery } from '@tanstack/react-query';
import type { OurProjectsCards } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useOurProjects = () => {
  return useQuery({
    queryKey: ['our-projects'],
    queryFn: async (): Promise<OurProjectsCards[]> => {
      const data = await apiClient.getOurProjects();
      return data;
    },
  });
};
