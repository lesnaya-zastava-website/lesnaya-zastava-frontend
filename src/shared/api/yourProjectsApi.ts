import { api } from './baseApi';

export const fetchYourProjectsText = async () => {
  const res = await api.get('/your-project-texts?populate=*');
  return res.data.data;
};

export const fetchYourProjectsPhoto = async () => {
  const res = await api.get('/your-project-photos?populate=*');
  return res.data.data;
};
