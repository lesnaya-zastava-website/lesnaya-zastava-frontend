import { Button } from '@/shared/ui/components/ui/button';
import { Link } from 'react-router-dom';

export const Main: React.FC = () => {
  return (
    <section className="mx-auto">
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 h-full w-full object-cover brightness-75"
          src="/videos/Main.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="relative z-10 flex h-full flex-col flex-wrap items-center justify-center gap-4 bg-black/30 text-3xl text-white">
          <div className="flex flex-wrap items-center justify-center gap-4 px-4 text-center lg:flex-nowrap">
            <img
              src="/logo2.png"
              alt="Логотип Лесная застава"
              className="max-w-[300px]"
            />
            <span className="hidden lg:block">|</span>
            <h1 className="text-3xl font-bold">
              Добро пожаловать!
            </h1>
          </div>

          <Link
            className="block cursor-pointer"
            to="/projects/our">
            <Button className="cursor-pointer">Актуальные предложения</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
