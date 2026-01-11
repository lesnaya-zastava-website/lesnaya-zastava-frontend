import type { EntertainmentOffer } from '../model/types';
import { PhotoGallery } from '@/shared/ui/PhotoGallery';

export const EntertainmentOfferCard: React.FC<{
  entertainmentOffer: EntertainmentOffer;
}> = ({ entertainmentOffer }) => {
  return (
    <PhotoGallery
      photos={entertainmentOffer.photo.map(p => ({
        url: p.url,
        name: p.name,
      }))}
    />
  );
};
