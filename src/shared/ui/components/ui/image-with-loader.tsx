
import { useState } from 'react';
import { Spinner } from './spinner';
import { cn } from '@/lib/utils';

interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  showSpinner?: boolean;
  spinnerSize?: 'sm' | 'md' | 'lg';
}

export const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  className,
  fallbackSrc,
  showSpinner = true,
  spinnerSize = 'md',
  onLoad,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setHasError(true);
    setIsLoading(false);

    // Попробуем использовать fallback изображение
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
    }

    onError?.(e);
  };

  const spinnerSizeClasses = {
    sm: 'size-4',
    md: 'size-8',
    lg: 'size-12',
  };

  return (
    <div className="relative">
      {isLoading && showSpinner && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <Spinner className={cn('text-primary', spinnerSizeClasses[spinnerSize])} />
        </div>
      )}

      <img
        src={imageSrc}
        alt={alt}
        className={cn(
          className,
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          hasError && !isLoading && 'opacity-50'
        )}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />

      {hasError && !isLoading && imageSrc === fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm rounded-lg">
          Изображение недоступно
        </div>
      )}
    </div>
  );
};
