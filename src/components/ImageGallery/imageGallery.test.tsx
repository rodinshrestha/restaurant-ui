import { describe, expect, test } from "vitest";
import { screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";
import { render } from "@/utils/render";

import ImageGallery from "./index";

describe("ImageGallery Component", () => {
  const mockImageData = [
    { src: "image1.jpg" },
    { src: "image2.jpg" },
    { src: "image3.jpg" },
  ];

  describe("Rendering", () => {
    test("renders with correct number of images", () => {
      render(<ImageGallery imageData={mockImageData} />);
      const imageList = screen.getAllByTestId("image-gallery-test-id");
      expect(imageList).toHaveLength(mockImageData.length);
    });

    test("renders with custom test ID", () => {
      const customTestId = "custom-gallery";
      render(<ImageGallery imageData={mockImageData} testid={customTestId} />);
      expect(screen.getByTestId(customTestId)).toBeInTheDocument();
    });

    test("renders empty gallery when no images provided", () => {
      render(<ImageGallery imageData={[]} />);
      const galleryWrapper = screen.queryByTestId("image-gallery-test-id");
      expect(galleryWrapper).not.toBeInTheDocument();
    });
  });

  describe("Error Handling", () => {
    test("handles invalid image sources", () => {
      const invalidImageData = [{ src: "invalid-image.jpg" }];
      render(<ImageGallery imageData={invalidImageData} />);

      const image = screen.getByTestId("image-gallery-test-id");
      fireEvent.error(image);

      // Check if fallback image is displayed
      expect(image).toHaveAttribute(
        "src",
        "/src/assets/image/fallback-image.png",
      );
    });
  });

  describe("Accessibility", () => {
    test("images have proper alt text", () => {
      render(<ImageGallery imageData={mockImageData} />);
      const images = screen.getAllByTestId("image-gallery-test-id");

      images.forEach((image) => {
        expect(image).toHaveAttribute("alt", "Food Image");
        expect(image).toHaveAttribute("aria-label", "Food Image");
      });
    });
  });
});
