interface BannerProps {
  title: string;
  videoSrc: string;
}

export const Banner: React.FC<BannerProps> = ({ title, videoSrc }) => {
  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-2xl shadow-lg">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 z-10 bg-black/40" />

      <div className="relative z-20 flex h-full items-center px-4">
        <h1 className="sm:w-max-[200px] text-2xl leading-tight font-bold text-white md:text-2xl lg:text-3xl xl:text-4xl">
          {title}
        </h1>
      </div>
    </div>
  );
};
