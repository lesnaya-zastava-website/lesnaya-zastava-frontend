import { api } from './baseApi';

export const fetchDocuments = async () => {
  const res = await api.get('/dokuments?populate=*');
  return res.data.data;
};
