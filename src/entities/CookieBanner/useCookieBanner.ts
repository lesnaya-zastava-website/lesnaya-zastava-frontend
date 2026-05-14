import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/shared/api/apiClient';
import type { CookieBannerText } from './types';

export const useCookieBanner = () => {
  return useQuery({
    queryKey: ['banner-cookies'],
    queryFn: async (): Promise<CookieBannerText[]> => {
      const data = await apiClient.getCookieBanner();
      return data;
    },
  });
};
