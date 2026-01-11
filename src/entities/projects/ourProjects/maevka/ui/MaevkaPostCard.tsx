import { API_BASE_URL } from '@shared/api/baseApi';
import type { maevkaPosts } from '../model/types';
import { ImageWithLoader } from '@/shared/ui/components/ui/image-with-loader';

export const MaevkaPostCard: React.FC<{
  maevkaPosts: maevkaPosts;
}> = ({ maevkaPosts }) => {
  return (
    <ImageWithLoader
      className="max-w-full"
      src={`${API_BASE_URL}${maevkaPosts.photo[0]?.url || ''}`}
      alt={maevkaPosts.photo[0]?.name || ''}
    />
  );
};
