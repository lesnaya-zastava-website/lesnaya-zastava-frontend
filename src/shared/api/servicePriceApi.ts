import { api } from './baseApi';

export const fetchServicePrices = async () => {
  const res = await api.get('/service-prices?populate=*');
  return res.data.data;
};
