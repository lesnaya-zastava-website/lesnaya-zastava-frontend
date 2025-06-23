import { api } from './baseApi';

export const fetchEntertainmentPrice = async () => {
  const res = await api.get('/price-list-of-services?populate=*');
  return res.data.data;
};

export const fetchEntertainmentOffer = async () => {
  const res = await api.get('/offers-of-services?populate=*');
  return res.data.data;
};
