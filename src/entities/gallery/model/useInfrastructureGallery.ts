import { useQuery } from '@tanstack/react-query';
import type { InfrastructureResponse } from './types';
import { fetchInfrastructureGallery } from '@shared/api/galleryApi';

export const useInfrastructureGallery = () => {
  return useQuery({
    queryKey: ['infrastructure-gallery'],
    queryFn: async (): Promise<InfrastructureResponse> => {
      const data = await fetchInfrastructureGallery();
      return data;
    },
  });
};
