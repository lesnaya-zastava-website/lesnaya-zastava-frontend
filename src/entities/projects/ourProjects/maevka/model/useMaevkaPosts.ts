import { useQuery } from '@tanstack/react-query';
import type { maevkaPosts } from './types';
import { fetchMaevkaPosts } from '@shared/api/ourProjectsPostsApi';

export const useMaevkaPosts = () => {
  return useQuery({
    queryKey: ['maevka'],
    queryFn: async (): Promise<maevkaPosts[]> => {
      const data = await fetchMaevkaPosts();
      return data;
    },
  });
};
