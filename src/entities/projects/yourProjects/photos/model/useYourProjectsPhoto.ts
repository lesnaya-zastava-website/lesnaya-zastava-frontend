import { useQuery } from '@tanstack/react-query';
import type { yourProjectsPhoto } from './types';
import { fetchYourProjectsPhoto } from '@/shared/api/yourProjectsApi';

export const useYourProjectsPhoto = () => {
  return useQuery({
    queryKey: ['your-projects-photo'],
    queryFn: async (): Promise<yourProjectsPhoto[]> => {
      const data = await fetchYourProjectsPhoto();
      return data;
    },
  });
};
