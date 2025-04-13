import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";

import ImageGallery from "./index";

/**
 * ImageGallery component provides a responsive image gallery with lightbox functionality.
 * It allows users to view images in a grid layout and click to view them in a full-screen lightbox.
 *
 * ## Features
 * - Responsive grid layout
 * - Lightbox functionality for full-screen viewing
 * - Image fallback handling
 * - Keyboard navigation in lightbox
 * - Customizable test ID
 *
 * ## Usage
 * ```tsx
 * // Basic usage
 * <ImageGallery
 *   imageData={[
 *     { src: "image1.jpg" },
 *     { src: "image2.jpg" },
 *     { src: "image3.jpg" }
 *   ]}
 * />
 *
 * // With custom test ID
 * <ImageGallery
 *   imageData={[
 *     { src: "image1.jpg" },
 *     { src: "image2.jpg" }
 *   ]}
 *   testid="custom-gallery"
 * />
 * ```
 */
const meta = {
  title: "Components/ImageGallery",
  component: ImageGallery,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
    },
    options: {
      showPanel: true,
    },
    viewMode: "docs",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    imageData: {
      control: "object",
      description: "Array of image objects with src property",
      table: {
        type: { summary: "Array<{ src: string }>" },
        defaultValue: { summary: "[]" },
      },
    },
    testid: {
      control: "text",
      description: "Custom test ID for the component",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "image-gallery-section-id" },
      },
    },
  },
} satisfies Meta<typeof ImageGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with sample images
export const Default: Story = {
  args: {
    imageData: [
      { src: "https://picsum.photos/400/300?random=1" },
      { src: "https://picsum.photos/400/300?random=2" },
      { src: "https://picsum.photos/400/300?random=3" },
      { src: "https://picsum.photos/400/300?random=4" },
      { src: "https://picsum.photos/400/300?random=5" },
      { src: "https://picsum.photos/400/300?random=6" },
    ],
  },
  tags: ["!dev"],
};
