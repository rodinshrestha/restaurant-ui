import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";

import OurStory from "./index";

/**
 * OurStory component displays the restaurant's story with title, subtitle, and description.
 *
 * ## Features
 * - Displays a main title (optional)
 * - Optional subtitle
 * - Formatted description with support for line breaks (optional)
 * - Responsive layout
 * - Clean and modern design
 * - Optional fluid container width
 *
 * ## Usage
 * ```tsx
 * // Basic usage with all props
 * <OurStory
 *   storyTitle="Our Story"
 *   storySubTitle="Discover Our Journey"
 *   storyDescription="Welcome to our restaurant..."
 *   containerFluid={true}
 * />
 *
 * // Minimal usage
 * <OurStory
 *   storyTitle="Our Story"
 *   storyDescription="Welcome to our restaurant..."
 * />
 * ```
 */
const meta = {
  title: "Components/OurStory",
  component: OurStory,
  parameters: {
    layout: "fullscreen",
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
    storyTitle: {
      control: "text",
      description: "The main title of the story section (optional)",
    },
    storySubTitle: {
      control: "text",
      description: "Optional subtitle for the story section",
    },
    storyDescription: {
      control: "text",
      description:
        "The main content of the story, supports line breaks with \n (optional)",
    },
    containerFluid: {
      control: "boolean",
      description: "Whether the container should be fluid (full width)",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof OurStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    storyTitle: "Our Story",
    storySubTitle: "Discover Our Journey",
    storyDescription:
      "Welcome to our restaurant, where passion meets culinary excellence. Our journey began in 2010 with a simple dream: to create memorable dining experiences.\n\nOver the years, we've grown from a small family-owned establishment to a beloved destination for food enthusiasts. Our commitment to quality ingredients and innovative cooking techniques remains unchanged.\n\nToday, we continue to write our story, one delicious dish at a time.",
    containerFluid: true,
  },
};

export const WithoutSubtitle: Story = {
  args: {
    storyTitle: "Our Story",
    storyDescription:
      "Welcome to our restaurant, where passion meets culinary excellence. Our journey began in 2010 with a simple dream: to create memorable dining experiences.",
    containerFluid: false,
  },
};

export const LongContent: Story = {
  args: {
    storyTitle: "Our Rich History",
    storySubTitle: "A Legacy of Excellence",
    storyDescription:
      "Founded in 2010, our restaurant has been a cornerstone of the community for over a decade.\n\nOur story began with a simple vision: to create a space where people could gather, share stories, and enjoy exceptional food. What started as a small family-owned establishment has grown into a beloved destination for food enthusiasts from near and far.\n\nThroughout our journey, we've remained committed to our core values:\n- Quality ingredients sourced from local farmers\n- Innovative cooking techniques that respect tradition\n- Warm, welcoming atmosphere that feels like home\n- Exceptional service that makes every guest feel special\n\nToday, we continue to write our story, one delicious dish at a time. We invite you to be part of our ongoing journey and create your own memories at our table.",
    containerFluid: true,
  },
};

export const Minimal: Story = {
  args: {
    storyTitle: "Our Story",
    containerFluid: false,
  },
};
