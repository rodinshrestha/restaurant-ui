import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/theme";

import ImageWithFallBack from "./index";

/**
 * ImageWithFallBack component provides a robust image display with automatic fallback handling.
 * It ensures a consistent user experience by showing a fallback image when the primary image fails to load.
 *
 * ### Features
 * - Automatic fallback image handling
 * - Customizable dimensions
 * - Accessibility support
 * - Error handling
 * - Custom styling support
 *
 * ### Usage
 * ```tsx
 * // Basic usage
 * <ImageWithFallBack
 *   src="path/to/image.jpg"
 *   alt="Description"
 * />
 *
 * // With custom dimensions
 * <ImageWithFallBack
 *   src="path/to/image.jpg"
 *   alt="Description"
 *   width={300}
 *   height={200}
 * />
 *
 * // With custom styling
 * <ImageWithFallBack
 *   src="path/to/image.jpg"
 *   alt="Description"
 *   className="custom-image"
 * />
 * ```
 *
 * ### Props
 * - `src`: Source URL of the image (required)
 * - `alt`: Alternative text for accessibility (required)
 * - `width`: Width of the image in pixels (optional)
 * - `height`: Height of the image in pixels (optional)
 * - `className`: Additional CSS classes (optional)
 *
 * ### Best Practices
 * - Always provide meaningful alt text for accessibility
 * - Use appropriate image dimensions to prevent layout shifts
 * - Consider using responsive images for different screen sizes
 * - Test fallback behavior with invalid image sources
 */
const meta = {
  title: "Components/ImageWithFallBack",
  component: ImageWithFallBack,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    src: {
      control: "text",
      description: "Source URL of the image",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: undefined },
      },
    },
    alt: {
      control: "text",
      description: "Alternative text for accessibility",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: undefined },
      },
    },
    width: {
      control: { type: "number", min: 0 },
      description: "Width of the image in pixels",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: undefined },
      },
    },
    height: {
      control: { type: "number", min: 0 },
      description: "Height of the image in pixels",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: undefined },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: undefined },
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof ImageWithFallBack>;

export default meta;
type Story = StoryObj<typeof meta>;

// Playground Story
export const ImagePlayground: Story = {
  args: {
    src: "https://picsum.photos/400/300",
    alt: "Random placeholder image",
    width: 400,
    height: 300,
  },
  tags: ["!autodocs"],
};

// Success Story
export const Default: Story = {
  args: {
    src: "https://picsum.photos/400/300",
    alt: "Random placeholder image",
    width: 400,
    height: 300,
  },
  tags: ["!dev"],
};

/**
 * When the image fails to load, the fallback image will be displayed.
 */
export const WithFallback: Story = {
  args: {
    src: "https://invalid-image-url.com/image.jpg", // This will trigger the fallback
    alt: "Image that will show fallback",
    width: 400,
    height: 300,
  },
  tags: ["!dev"],
};
