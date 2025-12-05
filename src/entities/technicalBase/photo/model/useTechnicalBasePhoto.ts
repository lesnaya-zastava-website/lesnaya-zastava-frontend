import { useQuery } from '@tanstack/react-query';
import type { TechnicalBasePhoto } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useTechnicalBasePhoto = () => {
  return useQuery({
    queryKey: ['technical-base-photo'],
    queryFn: async (): Promise<TechnicalBasePhoto[]> => {
      const data = await apiClient.getTechnicalBasePhoto();
      return data;
    },
  });
};
