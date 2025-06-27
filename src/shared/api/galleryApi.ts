import { api } from './baseApi';

export const fetchInfrastructureGallery = async () => {
  const res = await api.get(
    '/infrastruktura-galereyas/?populate=*&sort=createdAt:asc',
  );
  return res.data.data;
};

export const fetchSafetyGallery = async () => {
  const res = await api.get('/safety-photos/?populate=*&sort=createdAt:asc');
  return res.data.data;
};
