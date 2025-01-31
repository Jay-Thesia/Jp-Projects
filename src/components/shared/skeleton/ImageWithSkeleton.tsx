import React, { useState } from 'react';
import Skeleton from './skeleton';

const ImageWithSkeleton = ({ src, alt, width, height, className }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    console.log('Error loading image');
    setHasError(true);
  };

  return (
    <>
      <div className="relative">
        {isLoading && (
          <Skeleton width={width} height={height} className={className} />
        )}

        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={className}
          // style={{
          //   display: isLoading ? 'none' : 'block',
          // }}
          onLoad={handleImageLoad}
          onError={handleError}
        />
        {hasError && <div>Error loading image</div>}
      </div>
    </>
  );
};

export default ImageWithSkeleton;
