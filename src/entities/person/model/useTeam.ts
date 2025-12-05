import { useQuery } from '@tanstack/react-query';
import type { TeamMember } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useTeam = () => {
  return useQuery({
    queryKey: ['team'],
    queryFn: async (): Promise<TeamMember[]> => {
      const data = await apiClient.getTeamMembers();
      return data;
    },
  });
};
