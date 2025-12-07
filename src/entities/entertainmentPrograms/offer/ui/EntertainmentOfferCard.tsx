import type { EntertainmentOffer } from '../model/types';
import { PhotoGallery } from '@/shared/ui/PhotoGallery';

export const EntertainmentOfferCard: React.FC<{
  entertainmentOffer: EntertainmentOffer;
}> = ({ entertainmentOffer }) => {
  return (
    <PhotoGallery
      photos={[
        {
          url: entertainmentOffer.photo.url,
          name: entertainmentOffer.photo.name,
        },
      ]}
    />
  );
};
