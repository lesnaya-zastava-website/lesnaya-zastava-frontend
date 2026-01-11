import { Spinner } from './spinner';

export const Loader = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <Spinner className="text-primary" />
    </div>
  );
};

