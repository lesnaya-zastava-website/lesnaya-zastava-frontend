import { useQuery } from '@tanstack/react-query';
import type {SafetyImage } from './types';
import { fetchSafetyGallery } from '@shared/api/galleryApi';

export const useSafetyGallery = () => {
  return useQuery({
    queryKey: ['safety-gallery'],
    queryFn: async (): Promise<SafetyImage[]> => {
      const data = await fetchSafetyGallery();
      return data;
    },
  });
};
