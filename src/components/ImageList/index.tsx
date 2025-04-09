import React from "react";

import ImageWithFallBack from "@/components/ImageWithFallBack";

import { StyledDiv } from "./style";

type Props = {
  imageUrl: string;
  alt?: string;
  onClick?: () => void;
  testId?: string;
};

const ImageList = ({
  imageUrl,
  alt = "Kitchen image",
  onClick,
  testId,
}: Props) => {
  return (
    <StyledDiv onClick={onClick}>
      <ImageWithFallBack src={imageUrl} alt={alt} testId={testId} />
    </StyledDiv>
  );
};

export default ImageList;
