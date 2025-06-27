import { API_BASE_URL } from '@shared/api/baseApi';
import type { proYouthPosts } from '../model/types';

export const ProYouthPostCard: React.FC<{
  proYouthPosts: proYouthPosts;
}> = ({ proYouthPosts }) => {
  return (
    <img
      className="max-w-full"
      src={`${API_BASE_URL}${proYouthPosts.photo.url}`}
      alt={proYouthPosts.photo.name}
    />
  );
};
