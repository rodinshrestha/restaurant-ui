import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { theme } from "@/theme";
import { defaultPalette } from "@/theme/color";

import FeatureImageList from ".";

const meta = {
  title: "Components/FeatureImage",
  component: FeatureImageList,

  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Feature cards with image backgrounds and interactive links.
        Used to highlight key content areas with a colored overlay.`,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <Story />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
  argTypes: {
    title: {
      control: "text",
      description: "Text displayed on the feature card",
    },
    imageURL: {
      control: "text",
      description: "URL of the background image",
    },
    href: {
      control: "text",
      description: "Link destination URL",
    },
    bgColor: {
      control: "select",
      options: Object.keys(defaultPalette),
      description: "Color overlay from theme palette",
    },
    isLarge: {
      control: "boolean",
      description: "Whether to use a larger width variant",
    },
  },
} satisfies Meta<typeof FeatureImageList>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground for the FeatureImage component.
 * Adjust the controls to see different configurations.
 */
export const FeatureImagePlayground: Story = {
  args: {
    title: "Featured Menu",
    imageURL: "https://source.unsplash.com/random/800x600/?food",
    href: "/menu",
    bgColor: "bg",
  },
};

/**
 * Default feature image with standard width (40%).
 */
export const Default: Story = {
  args: {
    ...FeatureImagePlayground.args,
    title: "Our Restaurant",
  },
  tags: ["!dev"],
};
