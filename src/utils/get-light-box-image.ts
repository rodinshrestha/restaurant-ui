import { ImageGalleryProps } from "@/components/ImageGallery";

export const getLightBoxImage = (imageList: ImageGalleryProps["imageData"]) => {
  return imageList.map((x) => {
    return {
      url: x.src || "",
      original: x.src || "",
    };
  });
};
