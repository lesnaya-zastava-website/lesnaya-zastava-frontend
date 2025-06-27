import { api } from './baseApi';

export const fetchRoute = async () => {
  const res = await api.get('/contacts-photos?populate=*');
  return res.data.data;
};
