import { API_BASE_URL } from '@/shared/api/baseApi';
import type { Routes } from '../model/types';

export const RoutesCard: React.FC<{
  contactRoutes: Routes;
  index: number;
}> = ({ contactRoutes, index }) => {
  return (
    <div className="rounded-lg border-1 shadow-lg backdrop-blur-sm">
      <div className="p-6 pb-4">
        <h3 className="flex items-center gap-3 text-lg font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white">
            {index}
          </div>
          {contactRoutes.title}
        </h3>
      </div>
      <div className="space-y-4 px-6 pb-6">
        <p>{contactRoutes.description}</p>
        <div className="">
          <img
            className="w-full"
            src={`${API_BASE_URL}${contactRoutes.photo.url}`}
            alt="Дорога в лесную заставу"
          />
        </div>
      </div>
    </div>
  );
};
