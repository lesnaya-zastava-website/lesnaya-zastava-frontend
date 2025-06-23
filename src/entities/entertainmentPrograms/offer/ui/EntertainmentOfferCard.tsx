import { API_BASE_URL } from '@shared/api/baseApi';
import type { EntertainmentOffer } from '../model/types';

export const EntertainmentOfferCard: React.FC<{
  entertainmentOffer: EntertainmentOffer;
}> = ({ entertainmentOffer }) => {
  return (
    <img
      className="max-w-full"
      src={`${API_BASE_URL}${entertainmentOffer.photo.url}`}
      alt={entertainmentOffer.photo.name}
    />
  );
};
