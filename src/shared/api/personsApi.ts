import { api } from './baseApi';

export const fetchTeamMembers = async () => {
  const res = await api.get('/team-members?populate=*');
  return res.data.data;
};
