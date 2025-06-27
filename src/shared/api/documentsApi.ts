import { api } from './baseApi';

export const fetchDocuments = async () => {
  const res = await api.get('/dokuments?populate=*');
  return res.data.data;
};

export const fetchSafetyDocuments = async () => {
  const res = await api.get('/safety-docs?populate=*');
  return res.data.data;
};
