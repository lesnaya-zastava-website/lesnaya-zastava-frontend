import type { EntertainmentPrice } from '../model/types';
import { PhotoGallery } from '@/shared/ui/PhotoGallery';

export const EntertainmentPriceCard: React.FC<{
  entertainmentPrice: EntertainmentPrice;
}> = ({ entertainmentPrice }) => {
  return (
    <PhotoGallery
      photos={[
        {
          url: entertainmentPrice.photo.url,
          name: entertainmentPrice.photo.name,
        },
      ]}
    />
  );
};
