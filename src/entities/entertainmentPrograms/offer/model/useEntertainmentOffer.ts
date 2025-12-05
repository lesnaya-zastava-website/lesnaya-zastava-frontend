import { useQuery } from '@tanstack/react-query';
import type { EntertainmentOffer } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useEntertainmentOffer = () => {
  return useQuery({
    queryKey: ['entertainment-offers'],
    queryFn: async (): Promise<EntertainmentOffer[]> => {
      const data = await apiClient.getEntertainmentOffer();
      return data;
    },
  });
};
