import { screen, fireEvent } from "@testing-library/react";
import { expect, vi } from "vitest";

import { render } from "@/utils/render";

import ImageWithFallBack from "./index";

// Mock the fallback image import
vi.mock("@/assets/image/fallback-image.png", () => ({
  default: "fallback-image.png",
}));

describe("ImageWithFallBack Component", () => {
  const defaultProps = {
    src: "test-image.jpg",
    alt: "Test Image",
  };

  describe("Rendering", () => {
    it("renders with correct attributes", () => {
      render(<ImageWithFallBack {...defaultProps} />);
      const img = screen.getByTestId("image-with-fallback");
      expect(img).toHaveAttribute("src", defaultProps.src);
      expect(img).toHaveAttribute("alt", defaultProps.alt);
      expect(img).toHaveAttribute("aria-label", defaultProps.alt);
    });

    it("renders with custom width and height", () => {
      const width = 100;
      const height = 200;
      render(
        <ImageWithFallBack {...defaultProps} width={width} height={height} />,
      );
      const img = screen.getByTestId("image-with-fallback");
      expect(img).toHaveAttribute("width", width.toString());
      expect(img).toHaveAttribute("height", height.toString());
    });

    it("applies custom className", () => {
      const className = "custom-image-class";
      render(<ImageWithFallBack {...defaultProps} className={className} />);
      const img = screen.getByTestId("image-with-fallback");
      expect(img).toHaveClass(className);
    });
  });

  describe("Fallback Behavior", () => {
    it("shows fallback image on error", () => {
      render(<ImageWithFallBack {...defaultProps} />);
      const img = screen.getByTestId("image-with-fallback");

      // Simulate image load error
      fireEvent.error(img);

      expect(img).toHaveAttribute("src", "fallback-image.png");
    });

    it("maintains original attributes after fallback", () => {
      render(
        <ImageWithFallBack
          {...defaultProps}
          width={100}
          height={200}
          className="test-class"
        />,
      );
      const img = screen.getByTestId("image-with-fallback");

      // Simulate image load error
      fireEvent.error(img);

      expect(img).toHaveAttribute("width", "100");
      expect(img).toHaveAttribute("height", "200");
      expect(img).toHaveClass("test-class");
      expect(img).toHaveAttribute("alt", defaultProps.alt);
      expect(img).toHaveAttribute("aria-label", defaultProps.alt);
    });
  });

  describe("Error Handling", () => {
    it("handles multiple error events", () => {
      render(<ImageWithFallBack {...defaultProps} />);
      const img = screen.getByTestId("image-with-fallback");

      // Simulate multiple errors
      fireEvent.error(img);
      fireEvent.error(img);

      expect(img).toHaveAttribute("src", "fallback-image.png");
    });

    it("handles invalid image source", () => {
      render(<ImageWithFallBack src="invalid-image.jpg" alt="Invalid Image" />);
      const img = screen.getByTestId("image-with-fallback");

      fireEvent.error(img);

      expect(img).toHaveAttribute("src", "fallback-image.png");
    });
  });

  describe("Accessibility", () => {
    it("maintains accessibility attributes", () => {
      render(<ImageWithFallBack {...defaultProps} />);
      const img = screen.getByTestId("image-with-fallback");

      fireEvent.error(img);

      expect(img).toHaveAttribute("alt", defaultProps.alt);
      expect(img).toHaveAttribute("aria-label", defaultProps.alt);
    });
  });
});
