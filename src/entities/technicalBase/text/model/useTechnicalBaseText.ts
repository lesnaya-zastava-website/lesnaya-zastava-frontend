import { useQuery } from '@tanstack/react-query';
import type { technicalBaseText } from './types';
import { fetchTechnicalBaseText } from '@/shared/api/technicalBaseApi';


export const useTechnicalBaseText = () => {
  return useQuery({
    queryKey: ['technical-base-text'],
    queryFn: async (): Promise<technicalBaseText[]> => {
      const data = await fetchTechnicalBaseText();
      return data;
    },
  });
};
