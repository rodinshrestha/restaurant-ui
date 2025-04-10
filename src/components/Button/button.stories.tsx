import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/theme";

import Button from "./index";

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
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true, // Ensures the docs page includes all stories
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
    skin: {
      control: "select",
      options: ["contained", "outline"],
      description: "The visual style of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    onClick: {
      action: "clicked",
      description: "Callback fired when the button is clicked",
    },
    href: {
      description:
        "URL to navigate to when clicked. If provided, renders as an anchor tag",
    },
    children: {
      description: "Content to be rendered inside the button",
      control: "text",
    },
    bgColor: {
      description:
        "Custom background color for the button. For contained buttons, sets background and border color. For outline buttons, sets text and border color.",
      control: "color",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground for the Button component.
 * All controls are enabled for experimentation.
 */
export const ButtonPlayground: Story = {
  args: {
    skin: "contained",
    children: "Button",
  },
  tags: ["!autodocs"],
};

/**
 * Default contained button style.
 * This is the primary button style used for main actions.
 */
export const Contained: Story = {
  args: {
    skin: "contained",
    children: "Button",
  },
  tags: ["!dev"], //Hide is storybook navbar
};

/**
 * Outline button style.
 * Used for secondary actions or when you want a less prominent button.
 */
export const Outline: Story = {
  args: {
    skin: "outline",
    children: "Button",
  },
  tags: ["!dev"], //Hide is storybook navbar
};

/**
 * Small size button.
 * Used for compact UI elements or when space is limited.
 */
export const Small: Story = {
  args: {
    size: "sm",
    skin: "contained",
    children: "Small Button",
  },
  tags: ["!dev"], //Hide is storybook navbar
};

/**
 * Large size button.
 * Used for prominent actions or when you want to draw attention.
 */
export const Large: Story = {
  args: {
    size: "lg",
    skin: "contained",
    children: "Large Button",
  },
  tags: ["!dev"], //Hide is storybook navbar
};

/**
 * Disabled button state.
 * Used when the action is not available or the user needs to complete another action first.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    skin: "contained",
    children: "Disabled Button",
  },
  tags: ["!dev"], //Hide is storybook navbar
};

/**
 * Button as a link.
 * Renders as an anchor tag when href is provided.
 * Useful for navigation or external links.
 */
export const AsLink: Story = {
  args: {
    skin: "contained",
    href: "https://example.com",
    children: "Link Button",
  },
  tags: ["!dev"], //Hide is storybook navbar
};

/**
 * Button with custom background color and text color.
 * Demonstrates how to use the bgColor prop to customize the button's appearance.
 * For contained buttons, this affects both background and border color.
 */
export const CustomColor: Story = {
  args: {
    skin: "contained",
    bgColor: theme.color.cyan[100],
    children: "Custom Color Button",
    size: "lg",
  },
  tags: ["!dev"], //Hide is storybook navbar
};
