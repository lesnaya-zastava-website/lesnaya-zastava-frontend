import { useQuery } from '@tanstack/react-query';
import type { OurProjectsCards } from './types';
import { fetchOurProjects } from '@shared/api/ourProjectsPostsApi';

export const useOurProjects = () => {
  return useQuery({
    queryKey: ['our-projects'],
    queryFn: async (): Promise<OurProjectsCards[]> => {
      const data = await fetchOurProjects();
      return data;
    },
  });
};
