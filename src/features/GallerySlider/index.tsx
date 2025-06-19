import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import type { Photo } from '@entities/gallery/model/types';
import { API_BASE_URL } from '@shared/api/baseApi';
import { XIcon } from 'lucide-react';

interface GallerySliderProps {
  photos: Photo[];
}

export const GallerySlider: React.FC<GallerySliderProps> = ({ photos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="relative w-full">
      {isOpen && selectedImageIndex !== null && (
        <div className="bg-opacity-80 fixed inset-0 z-[1000] flex items-center justify-center bg-black">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-[1010] text-3xl text-white transition hover:text-red-500 focus:outline-none">
            <XIcon />
          </button>

          <div className="relative w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <Swiper
              initialSlide={selectedImageIndex}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              modules={[Navigation]}>
              {photos?.map(item => (
                <SwiperSlide key={item.name}>
                  <div className="flex items-center justify-center">
                    <img
                      src={`${API_BASE_URL}${item.url}`}
                      alt={item.name}
                      className="max-h-[90vh] w-full rounded-lg object-contain shadow-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photos?.map((item, index) => {
          return (
            <div
              key={item.id}
              className="gallery__item"
              onClick={() => openModal(index)}>
              <img
                src={`${API_BASE_URL}${item.url}`}
                alt={item.name}
                className="gallery__image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
