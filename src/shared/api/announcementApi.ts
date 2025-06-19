import { api } from './baseApi';

export const fetchAnnouncement = async () => {
  const res = await api.get('/announcements?populate=*');
  return res.data.data;
};
