import type { ServicePrice } from '../model/types';
import { API_BASE_URL } from '@/shared/api/baseApi';

export const ServicePriceCard: React.FC<{ servicePrice: ServicePrice }> = ({
  servicePrice,
}) => {
  return <img className='w-full' src={`${API_BASE_URL}${servicePrice.photo.url}`} />;
};
