import { api } from './baseApi';

export const fetchTechnicalBaseText = async () => {
  const res = await api.get('/technical-base-texts?populate=*');
  return res.data.data;
};

export const fetchTechnicalBasePhoto = async () => {
  const res = await api.get('/materialno-tehnicheskaya-baza-photos?populate=*');
  return res.data.data;
};
