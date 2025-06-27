import { useQuery } from '@tanstack/react-query';
import type { TechnicalBasePhoto } from './types';
import { fetchTechnicalBasePhoto } from '@/shared/api/technicalBaseApi';

export const useTechnicalBasePhoto = () => {
  return useQuery({
    queryKey: ['technical-base-photo'],
    queryFn: async (): Promise<TechnicalBasePhoto[]> => {
      const data = await fetchTechnicalBasePhoto();
      return data;
    },
  });
};
