import { useQuery } from '@tanstack/react-query';
import type { MediaCenterImage } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useMediaCenterGallery = () => {
  return useQuery({
    queryKey: ['media-center-gallery'],
    queryFn: async (): Promise<MediaCenterImage[]> => {
      const data = await apiClient.getMediaCenterGallery();
      return data;
    },
  });
};
