import { API_BASE_URL } from '@shared/api/baseApi';
import type { maevkaPosts } from '../model/types';

export const MaevkaPostCard: React.FC<{
  maevkaPosts: maevkaPosts;
}> = ({ maevkaPosts }) => {
  return (
    <img
      className="max-w-full"
      src={`${API_BASE_URL}${maevkaPosts.photo.url}`}
      alt={maevkaPosts.photo.name}
    />
  );
};
