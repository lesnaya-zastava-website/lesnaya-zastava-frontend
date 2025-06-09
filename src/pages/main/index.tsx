export const Main: React.FC = () => {
  return (
    <section className="mx-auto">
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 h-full w-full object-cover brightness-75"
          src="/videos/projects.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="relative z-10 flex h-full flex-wrap items-center justify-center bg-black/30 text-3xl text-white">
          <div className="flex items-center gap-4 justify-center px-4 flex-wrap lg:flex-nowrap text-center">
            <img
              src="/tempLogo.png"
              alt="Логотип Лесная застава"
            />
            <span className="hidden lg:block">|</span><h1 className="font-bold">Добро пожаловать в Лесную заставу!</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
