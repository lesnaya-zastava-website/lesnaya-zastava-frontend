import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/shared/api/apiClient';
import type { PrivacyText } from './types';

export const usePrivacy = () => {
  return useQuery({
    queryKey: ['politika-obrabotki-personalnyh-dannyhs'],
    queryFn: async (): Promise<PrivacyText[]> => {
      const data = await apiClient.getPrivacy();
      return data;
    },
  });
};
