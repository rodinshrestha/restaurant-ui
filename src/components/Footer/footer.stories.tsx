import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";

import Footer from "./index";

/**
 * Footer component provides a consistent footer layout across the application. It displays text content with predefined styling and supports customization.
 *
 * ## Features
 * - Customizable footer text with dyanamic date(%date%)
 * - Consisten styling with theme
 * - Responsive layout
 * - Facebook and instagram icon feature supported with relative link
 * - Custom classname to override css
 *
 * ## Usage
 * - You can use the `%date%` placeholder in the `footerText` prop to dynamically display the current year.
 * <Footer
 *  footerText = "footer text test"
 *  facebookLink = "www.facebook.com"
 *  instagramIcon = "www.instagram.com"
 * />
 */

const meta = {
  title: "Components/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    footerText: {
      control: "text",
      description: "Footer text with support for %date% placeholder",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "" },
      },
    },
    facebookLink: {
      control: "text",
      description: "Facebook URL",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "" },
      },
    },
    facebookIcon: {
      control: "text",
      description: "To override default facebook icon",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "" },
      },
    },
    instagramLink: {
      control: "text",
      description: "Instagram URL",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "" },
      },
    },
    instagramIcon: {
      control: "text",
      description: "To override default instagram icon",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "" },
      },
    },
    yelpIcon: {
      control: "text",
      description: "To override yelp icon",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "default yep icon" },
      },
    },
    yelpLink: {
      control: "text",
      description: "yelp link",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "" },
      },
    },
    bgColor: {
      control: "text",
      description: "Override footer background color",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "#fff" },
      },
    },
    iconBgColor: {
      description: "background color for the icon",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "" },
      },
    },
    iconRadius: {
      control: "boolean",
      description: "50% radius will be applied",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "false" },
      },
    },
    textColor: {
      control: "text",
      description: "Override footer text color",
      table: {
        type: { summary: "optional" },
        defaultValue: { summary: "#000" },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Footer
export const FooterPlayground: Story = {
  args: {
    footerText: "Footer Playground",
  },
  tags: ["!autodocs"],
};
// Dyanmic Date
export const DynamicDate: Story = {
  args: {
    footerText: "© %date% Your Company Name. All rights reserved.",
  },
  tags: ["!dev"],
};
// Custom Text
export const CustomText: Story = {
  args: {
    footerText: "© 2024 Restaurant UI. All rights reserved.",
  },
  tags: ["!dev"], //Hide is storybook navbar
};

// Long Text
export const LongText: Story = {
  args: {
    footerText:
      "This is a very long footer text that demonstrates how the component handles multiple lines of content while maintaining proper layout and spacing.",
  },
  tags: ["!dev"], //Hide is storybook navbar
};

// With HTML Content
export const WithHTMLContent: Story = {
  args: {
    footerText:
      "Contact us at support@restaurant.com | Follow us on social media",
  },
  tags: ["!dev"], //Hide is storybook navbar
};
