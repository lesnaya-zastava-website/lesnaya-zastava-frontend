import { useQuery } from '@tanstack/react-query';
import type { ServicePrice } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useServicePrices = () => {
  return useQuery({
    queryKey: ['service-prices'],
    queryFn: async (): Promise<ServicePrice[]> => {
      const data = await apiClient.getServicePrices();
      return data;
    },
  });
};
