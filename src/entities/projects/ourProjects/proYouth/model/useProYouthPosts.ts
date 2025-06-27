import { useQuery } from '@tanstack/react-query';
import type { proYouthPosts } from './types';
import { fetchProYouthPosts } from '@shared/api/ourProjectsPostsApi';

export const useProYouthPosts = () => {
  return useQuery({
    queryKey: ['pro-youth'],
    queryFn: async (): Promise<proYouthPosts[]> => {
      const data = await fetchProYouthPosts();
      return data;
    },
  });
};
