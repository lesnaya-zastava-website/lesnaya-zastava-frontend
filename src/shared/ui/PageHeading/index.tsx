import type { PropsWithChildren } from 'react';

export const PageHeading: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 
      className="scroll-m-20 pb-5 text-2xl font-bold text-balance sm:text-3xl lg:text-4xl"
      style={{ letterSpacing: 'normal', fontStretch: 'normal' }}>
      {children}
    </h1>
  );
};
