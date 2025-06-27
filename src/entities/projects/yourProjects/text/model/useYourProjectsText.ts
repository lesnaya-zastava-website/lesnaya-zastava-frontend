import { useQuery } from '@tanstack/react-query';
import type { yourProjectsText } from './types';
import { fetchYourProjectsText } from '@/shared/api/yourProjectsApi';

export const useYourProjectsText = () => {
  return useQuery({
    queryKey: ['your-projects-text'],
    queryFn: async (): Promise<yourProjectsText[]> => {
      const data = await fetchYourProjectsText();
      return data;
    },
  });
};
