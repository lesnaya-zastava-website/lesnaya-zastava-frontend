import { useQuery } from '@tanstack/react-query';
import type { TeamMember } from './types';
import { fetchTeamMembers } from '@shared/api/personsApi';

export const useTeam = () => {
  return useQuery({
    queryKey: ['team'],
    queryFn: async (): Promise<TeamMember[]> => {
      const data = await fetchTeamMembers();
      return data;
    },
  });
};
