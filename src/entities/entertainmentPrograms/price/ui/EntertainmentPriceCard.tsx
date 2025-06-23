import { API_BASE_URL } from '@shared/api/baseApi';
import type { EntertainmentPrice } from '../model/types';

export const EntertainmentPriceCard: React.FC<{
  entertainmentPrice: EntertainmentPrice;
}> = ({ entertainmentPrice }) => {
  return (
    <img
      className="max-w-full"
      src={`${API_BASE_URL}${entertainmentPrice.photo.url}`}
      alt={entertainmentPrice.photo.name}
    />
  );
};
