import { useQuery } from '@tanstack/react-query';
import type { SafetyText } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useSafetyText = () => {
  return useQuery({
    queryKey: ['safety-text'],
    queryFn: async (): Promise<SafetyText[]> => {
      const data = await apiClient.getSafetyText();
      return data;
    },
  });
};

