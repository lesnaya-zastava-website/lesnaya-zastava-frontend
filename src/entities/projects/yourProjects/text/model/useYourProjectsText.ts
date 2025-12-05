import { useQuery } from '@tanstack/react-query';
import type { yourProjectsText } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useYourProjectsText = () => {
  return useQuery({
    queryKey: ['your-projects-text'],
    queryFn: async (): Promise<yourProjectsText[]> => {
      const data = await apiClient.getYourProjectsText();
      return data;
    },
  });
};
