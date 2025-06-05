import type { PropsWithChildren } from 'react';

export const PageHeading: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="max-w-xl scroll-m-20 pb-5 text-4xl font-bold tracking-tight text-balance">
      {children}
    </h1>
  );
};
