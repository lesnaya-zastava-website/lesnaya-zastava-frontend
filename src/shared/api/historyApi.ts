import { api } from './baseApi';

export const fetchHistoryPhotos = async () => {
  const res = await api.get('/history-photos?populate=*');
  return res.data.data;
};
