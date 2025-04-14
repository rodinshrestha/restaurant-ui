import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";

import Footer from "./index";

const meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Footer component provides a consistent footer layout across the application.
It displays text content with predefined styling and supports customization.

### Features
- Customizable footer text
- Consistent styling with theme
- Responsive layout
- Accessible markup

### Usage
\`\`\`tsx
// Default usage
<Footer />

// With custom text
<Footer footerText="Custom Footer Text" />
\`\`\`

### Props
- \`footerText\`: Text to display in the footer (optional, defaults to "Footer Text")

### Styling
The footer component uses styled-components and follows the theme's styling guidelines:
- Centered content layout
- Light background color
- Consistent padding
- Typography styling for text
`,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
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
