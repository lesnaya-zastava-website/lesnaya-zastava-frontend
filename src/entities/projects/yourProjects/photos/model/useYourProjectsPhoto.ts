import { useQuery } from '@tanstack/react-query';
import type { yourProjectsPhoto } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useYourProjectsPhoto = () => {
  return useQuery({
    queryKey: ['your-projects-photo'],
    queryFn: async (): Promise<yourProjectsPhoto[]> => {
      const data = await apiClient.getYourProjectsPhoto();
      return data;
    },
  });
};
