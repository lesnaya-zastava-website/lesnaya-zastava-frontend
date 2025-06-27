import { api } from './baseApi';

export const fetchProYouthPosts = async () => {
  const res = await api.get('/vzroslaya-smena-pro-yunost-posts?populate=*');
  return res.data.data;
};

export const fetchMaevkaPosts = async () => {
  const res = await api.get('/maevka?populate=*');
  return res.data.data;
};

export const fetchOurProjects = async () => {
  const res = await api.get('/our-projects?populate=*');
  return res.data.data;
};
