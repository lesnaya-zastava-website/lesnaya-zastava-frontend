import type { PropsSection } from './model';

export const CardSection: React.FC<{
  icon: string;
  title: string;
  Component: React.FC<PropsSection>;
  data: PropsSection[] | PropsSection;
  isPositionLeft: boolean;
  isContainer: boolean;
  isLoop: boolean;
}> = ({
  icon,
  title,
  Component,
  data,
  isPositionLeft,
  isContainer,
  isLoop = true,
}) => {
  return (
    <section
      className={`flex flex-col items-center gap-8 border-b border-gray-200 py-16 ${isPositionLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="md:w-1/3">
        <div className="mb-4 flex items-center gap-2">
          <span className="font-mono text-gray-700">{icon}</span>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
      </div>
      <div className="md:w-2/3">
        <div
          className={
            isContainer ? 'grid grid-cols-1 gap-6 sm:grid-cols-2' : undefined
          }>
          {isLoop ? (
            data.map((items, index) => (
              <Component
                key={index}
                {...items}
              />
            ))
          ) : (
            <Component {...data} />
          )}
        </div>
      </div>
    </section>
  );
};
