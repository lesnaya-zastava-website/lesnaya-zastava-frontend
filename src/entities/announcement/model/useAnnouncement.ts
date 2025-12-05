import { useQuery } from '@tanstack/react-query';
import type { AnnouncementResponse } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useAnnouncement = () => {
  return useQuery({
    queryKey: ['announcements'],
    queryFn: async (): Promise<AnnouncementResponse> => {
      const data = await apiClient.getAnnouncements();
      return data;
    },
  });
};
