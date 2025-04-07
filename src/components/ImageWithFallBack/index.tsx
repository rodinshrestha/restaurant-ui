import React from "react";

import fallbackImage from "@/assets/image/fallback-image.png";

export type ImageWithFallBackProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  testId?: string;
};

const ImageWithFallBack = ({
  src,
  alt,
  className,
  width,
  height,
  testId,
}: ImageWithFallBackProps) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <img
      data-testid={testId || "image-with-fallback"}
      src={imgSrc}
      width={width}
      height={height}
      alt={alt}
      aria-label={alt}
      className={className}
      onError={() => setImgSrc(fallbackImage)}
    />
  );
};

export default ImageWithFallBack;
