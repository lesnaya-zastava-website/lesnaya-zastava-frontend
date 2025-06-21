import { useQuery } from '@tanstack/react-query';
import { fetchServicePrices } from '@shared/api/servicePriceApi';
import type { ServicePrice } from './types';



export const useServicePrices = () => {
  return useQuery({
    queryKey: ['service-prices'],
    queryFn: async (): Promise<ServicePrice[]> => {
      const data = await fetchServicePrices();
      return data;
    },
  });
};
