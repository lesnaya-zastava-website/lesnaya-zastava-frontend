import { useQuery } from '@tanstack/react-query';
import type { technicalBaseText } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useTechnicalBaseText = () => {
  return useQuery({
    queryKey: ['technical-base-text'],
    queryFn: async (): Promise<technicalBaseText[]> => {
      const data = await apiClient.getTechnicalBaseText();
      return data;
    },
  });
};
