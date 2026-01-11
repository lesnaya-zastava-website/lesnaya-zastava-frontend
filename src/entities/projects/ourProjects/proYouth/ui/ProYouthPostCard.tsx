import { API_BASE_URL } from '@shared/api/baseApi';
import type { proYouthPosts } from '../model/types';
import { ImageWithLoader } from '@/shared/ui/components/ui/image-with-loader';

export const ProYouthPostCard: React.FC<{
  proYouthPosts: proYouthPosts;
}> = ({ proYouthPosts }) => {
  return (
    <ImageWithLoader
      className="max-w-full"
      src={`${API_BASE_URL}${proYouthPosts.photo[0]?.url || ''}`}
      alt={proYouthPosts.photo[0]?.name || ''}
    />
  );
};
