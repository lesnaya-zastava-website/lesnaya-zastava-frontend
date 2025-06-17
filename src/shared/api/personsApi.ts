import { api } from './baseApi';

export const fetchTeamMembers = async () => {
  const res = await api.get('/team-members?populate=*&sort=createdAt:asc');
  return res.data.data;
};

export const fetchTeachers = async () => {
  const res = await api.get('/teachers?populate=*&sort=createdAt:asc');
  return res.data.data;
};
