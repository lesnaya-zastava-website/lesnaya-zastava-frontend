import { api } from './baseApi';

export const fetchInfrastructureGallery = async () => {
  const res = await api.get(
    '/infrastruktura-galereyas/?populate=*&sort=createdAt:asc',
  );
  return res.data.data;
};
