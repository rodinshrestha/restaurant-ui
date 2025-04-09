import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../theme";
import ImageList from "./index";

/**
 * ImageList component displays images with hover effects and click handlers.
 *
 * ## Features
 * - Responsive image display
 * - Hover animation effects
 * - Click handler support
 * - Theme-aware breakpoints
 *
 * ## Usage
 * ```tsx
 * <ImageList
 *   imageUrl="https://example.com/image.jpg"
 *   alt="Description"
 *   onClick={() => console.log('clicked')}
 * />
 * ```
 */
const meta = {
  title: "Components/ImageList",
  component: ImageList,
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
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    imageUrl: {
      control: "text",
      description: "URL of the image to display",
      defaultValue: "https://via.placeholder.com/300x300",
    },
    alt: {
      control: "text",
      description: "Alternative text for the image",
      defaultValue: "Image",
    },
    onClick: {
      action: "clicked",
      description: "Callback fired when the image is clicked",
      table: {
        category: "Events",
      },
    },
  },
} satisfies Meta<typeof ImageList>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground for the ImageList component.
 * All controls are enabled for experimentation.
 */
export const ImageListPlayground: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/300x300",
    alt: "Playground image",
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      canvas: { sourceState: "shown" },
    },
  },
  tags: ["!autodocs"],
};

/**
 * Default ImageList with basic configuration.
 */
export const Default: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/300x300",
    alt: "Default image",
  },
  parameters: {
    controls: { expanded: true },
  },
  tags: ["!dev"],
};

/**
 * ImageList with click handler demonstration.
 */
export const WithClickHandler: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/300x300",
    alt: "Clickable image",
    onClick: () => {
      // Handle image click
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  tags: ["!dev"],
};

/**
 * Real-world example with kitchen image.
 */
export const KitchenImage: Story = {
  args: {
    imageUrl:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&auto=format",
    alt: "Modern kitchen design",
  },
  parameters: {
    controls: { expanded: true },
  },
  tags: ["!dev"],
};
