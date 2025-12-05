import { useQuery } from '@tanstack/react-query';
import type { EntertainmentPrice } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useEntertainmentPrice = () => {
  return useQuery({
    queryKey: ['entertainment-prices'],
    queryFn: async (): Promise<EntertainmentPrice[]> => {
      const data = await apiClient.getEntertainmentPrice();
      return data;
    },
  });
};
