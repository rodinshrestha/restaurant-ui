import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/theme";

import SectionBgImage from "./index";
/**
 * Section with background image component that creates visually rich sections.
 *
 * ## Features
 * - Custom background image with overlay for better text contrast
 * - Responsive layout that works on all screen sizes
 * - Flexible heading level(h1-h6) through 'as' prop
 * - Optional description text
 * - Built-in dark overlay to ensure text readability
 *
 * ## Usage
 * ```tsx
 * // Basic usage with just title
 * <SectionBgImage
 *  bgImage="https://example.com/image.jpg"
 * title="Welcome"
 * />
 *
 * // With description
 * <SectionBgImage
 * bgImage="https://example.com/image.jpg"
 * titile="Our Service"
 * description="Discover what we offer"
 * />
 *
 * // Custom heading level
 * <SectionBgImage
 * bgImage="https://example.com/image.jpg"
 * title="About Us"
 * as="h2"
 * />
 * ```
 */
const meta = {
  title: "Components/SectionBgImage",
  component: SectionBgImage,
  parameters: {
    layout: "fullscreen", //Changed to fullscreen to better showcase the section
    docs: {
      autodocs: true,
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
    bgImage: {
      control: "text",
      description: "URL of the background image to display",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      control: "text",
      description: "Main heading text for the section",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    description: {
      control: "text",
      description: "Optional subheading text displayed below the title",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "HTML heading level for the title",
      table: {
        defaultValue: { summary: "h1" },
      },
    },
  },
} satisfies Meta<typeof SectionBgImage>;

export default meta;
type Story = StoryObj<typeof meta>;
/**
 * Interactive playground for the SectionBgImage component.
 * Adjust the controls to see different configurations.
 */

export const SectionPlayground: Story = {
  args: {
    bgImage:
      "https://ucarecdn.com/1f18f5f0-443f-4211-86f3-7b1ad2f55bcf/-/progressive/yes/-/format/auto/-/resize/2000x/&quot",
    title: "Section Title",
  },
};
/**
 * Default section with background image.
 * Shows the basic usage with just a title.
 */
export const Default: Story = {
  args: {
    bgImage:
      "https://ucarecdn.com/1f18f5f0-443f-4211-86f3-7b1ad2f55bcf/-/progressive/yes/-/format/auto/-/resize/2000x/&quot",
    title: "Welcome to Our Site",
  },
  tags: ["!dev"],
};
/**
 * Section with description text.
 * Demonstrate how to include additonal text below the title.
 */
export const WithDescription: Story = {
  args: {
    bgImage:
      "https://ucarecdn.com/1f18f5f0-443f-4211-86f3-7b1ad2f55bcf/-/progressive/yes/-/format/auto/-/resize/2000x/&quot",
    title: "Our Services",
    description: "Discover what we can do for you",
  },
  tags: ["!dev"],
};
/**
 * Section with custom heading level.
 * Shows how to change the semantic heading level while maintaining visual style.
 */
export const WithCustomHeading: Story = {
  args: {
    bgImage:
      "https://ucarecdn.com/1f18f5f0-443f-4211-86f3-7b1ad2f55bcf/-/progressive/yes/-/format/auto/-/resize/2000x/&quot",
    title: "About Our Company",
    as: "h2",
  },
  tags: ["!dev"],
  name: "With Custom Heading Level",
};
/**
 * section with long text content.
 * Demonstrates how the component handles longer titles and descriptions.
 */
export const WithLongContent: Story = {
  args: {
    bgImage:
      "https://ucarecdn.com/1f18f5f0-443f-4211-86f3-7b1ad2f55bcf/-/progressive/yes/-/format/auto/-/resize/2000x/&quot",
    title:
      "This is Much Longer Section Title That Might Wrap to Multiple Lines",
    description:
      "Here's a more detailed description that provides additional context about this section. It might span several lines depending on the viewport width.",
  },
  tags: ["!dev"],
};
