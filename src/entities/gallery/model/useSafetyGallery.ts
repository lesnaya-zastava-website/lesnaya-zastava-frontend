import { useQuery } from '@tanstack/react-query';
import type {SafetyImage } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useSafetyGallery = () => {
  return useQuery({
    queryKey: ['safety-gallery'],
    queryFn: async (): Promise<SafetyImage[]> => {
      const data = await apiClient.getSafetyGallery();
      return data;
    },
  });
};
