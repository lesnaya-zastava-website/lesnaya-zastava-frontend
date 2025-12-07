import type { ServicePrice } from '../model/types';
import { PhotoGallery } from '@/shared/ui/PhotoGallery';

export const ServicePriceCard: React.FC<{ servicePrice: ServicePrice }> = ({
  servicePrice,
}) => {
  // Используем только основные фото (url в корне), игнорируя formats
  const mainPhotos = servicePrice.photo
    ?.map(p => ({
      url: p.url,
      name: p.name,
    })) || [];

  return <PhotoGallery photos={mainPhotos} />;
};
