import { useEffect, useState } from 'react';
import { ChevronsUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Прокрутить вверх"
      className={`fixed right-6 bottom-6 z-50 rounded-full bg-primary p-3 text-white shadow-md transition-opacity duration-400 ease-in-out ${visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} `}
      style={{ transitionProperty: 'opacity, transform' }}>
      <ChevronsUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTopButton;
