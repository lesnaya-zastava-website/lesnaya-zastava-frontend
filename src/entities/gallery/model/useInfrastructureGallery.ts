import { useQuery } from '@tanstack/react-query';
import type { InfrastructureItem } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useInfrastructureGallery = () => {
  return useQuery({
    queryKey: ['infrastructure-gallery'],
    queryFn: async (): Promise<InfrastructureItem[]> => {
      const data = await apiClient.getInfrastructureGallery();
      return data;
    },
  });
};
