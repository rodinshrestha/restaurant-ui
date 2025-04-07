import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/theme";

import Typography from "./index";

/**
 * Typography component provides consistent text styling across the application.
It supports various HTML tags through the 'as' prop and includes responsive design.
 *
 * ## Features
 * - Multiple HTML tag variants (h1-h6, p, span)
 * - Responsive font sizes
 * - Custom styling support
 * - Title attribute handling
 * - Click handler support
 * - Nested component support
 * 
 * ## Props
 * - \`as\`: HTML tag to render (required)
 * - \`children\`: Content to display
 * - \`className\`: Additional CSS classes
 * - \`style\`: Inline styles
 * - \`title\`: Custom title attribute
 * - \`onClick\`: Click handler function
 *
 * ## Usage
 * ```tsx
 * <Typography as="h1">Heading 1</Typography>
 * <Typography as="p">Paragraph text</Typography>
 * <Typography as="span">Inline text</Typography>
 * <Typography as="h1">Heading 1</Typography>
 * <Typography as="p">Paragraph text</Typography>
 * <Typography as="span">Inline text</Typography>
 * ```
 */
const meta = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// All Variants
export const AllVariants: Story = {
  args: {
    as: "p",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography as="h1">Heading 1</Typography>
      <Typography as="h2">Heading 2</Typography>
      <Typography as="h3">Heading 3</Typography>
      <Typography as="h4">Heading 4</Typography>
      <Typography as="h5">Heading 5</Typography>
      <Typography as="h6">Heading 6</Typography>
      <Typography as="p">Paragraph text</Typography>
      <Typography as="span">Inline text</Typography>
    </div>
  ),
};
