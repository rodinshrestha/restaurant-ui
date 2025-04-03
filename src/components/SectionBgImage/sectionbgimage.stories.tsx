import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/theme";

import SectionBgImage from "./index";

/**
 * Button component that supports different visual styles, sizes, and states.
 *
 * ## Features
 * - Two visual styles: contained and outline
 * - Three sizes: small, medium, and large
 * - Can be disabled
 * - Can over ride the button background color support for both contained and outline variants
 * - Can be rendered as a link when href is provided
 * - Supports custom className for additional styling
 *
 * ## Usage
 * ```tsx
 * // Basic button
 * <Button skin="contained">Click me</Button>
 *
 * // Outline button
 * <Button skin="outline">Outline Button</Button>
 *
 * // Different sizes
 * <Button size="sm">Small</Button>
 * <Button size="lg">Large</Button>
 *
 * // As a link
 * <Button href="https://example.com">Go to Example</Button>
 *
 * // Disabled state
 * <Button disabled>Disabled Button</Button>
 *
 * // With custom background color
 * <Button skin="contained" bgColor="#ff0000">Red Button</Button>
 * <Button skin="outline" bgColor="#00ff00">Green Outline Button</Button>
 * ```
 */
const meta = {
  title: "Components/SectionBgImage",
  component: SectionBgImage,
  parameters: {
    layout: "centered",
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
} satisfies Meta<typeof SectionBgImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SectionPlayground: Story = {
  args: {
    bgImage:
      "https://ucarecdn.com/1f18f5f0-443f-4211-86f3-7b1ad2f55bcf/-/progressive/yes/-/format/auto/-/resize/2000x/&quot",
    title: "test",
  },
  tags: ["!autodocs"],
};

export const Default: Story = {
  args: {
    bgImage:
      "https://ucarecdn.com/1f18f5f0-443f-4211-86f3-7b1ad2f55bcf/-/progressive/yes/-/format/auto/-/resize/2000x/&quot",
    title: "test",
  },
  tags: ["!dev"],
};

export const WithDescription: Story = {
  args: {
    bgImage:
      "https://ucarecdn.com/1f18f5f0-443f-4211-86f3-7b1ad2f55bcf/-/progressive/yes/-/format/auto/-/resize/2000x/&quot",
    title: "test",
    description: "this is decription test",
  },
  tags: ["!dev"],
};
