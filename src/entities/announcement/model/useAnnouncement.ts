import { useQuery } from '@tanstack/react-query';
import type { AnnouncementResponse } from './types';
import { fetchAnnouncement } from '@shared/api/announcementApi';

export const useAnnouncement = () => {
  return useQuery({
    queryKey: ['announcements'],
    queryFn: async (): Promise<AnnouncementResponse> => {
      const data = await fetchAnnouncement();
      return data;
    },
  });
};
