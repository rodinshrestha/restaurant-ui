import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/theme";

import Drawer from "./index";

/**
 * The Drawer component provides a sliding panel that can appear from any edge of the screen.
 * It's commonly used for navigation menus, filters, shopping carts, or any content that should
 * slide in and out of view.
 *
 * ## Features
 * - Four positioning options: left, right, top, bottom
 * - Customizable size (fullscreen or auto)
 * - Configurable overlay with custom opacity and color
 * - Customizable z-index for both drawer and overlay
 * - Animated transitions
 * - Optional top offset
 * - Responsive design support
 *
 * ## Usage
 * ```tsx
 * // Basic usage
 * <Drawer open={isOpen} onClose={handleClose}>
 *   <div>Drawer content</div>
 * </Drawer>
 *
 * // With custom position and size
 * <Drawer
 *   open={isOpen}
 *   position="right"
 *   size="auto"
 *   onClose={handleClose}
 * >
 *   <div>Right-aligned drawer</div>
 * </Drawer>
 *
 * // With custom styling
 * <Drawer
 *   open={isOpen}
 *   overlayColor="rgba(0,0,0,0.8)"
 *   overlayOpacity={0.8}
 *   drawerZindex={1000}
 *   onClose={handleClose}
 * >
 *   <div>Styled drawer</div>
 * </Drawer>
 * ```
 */
const meta = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
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
    open: {
      control: "boolean",
      description: "Controls whether the drawer is open or closed",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    position: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
      description: "The position from which the drawer appears",
      table: {
        type: { summary: "left | right | top | bottom" },
        defaultValue: { summary: "left" },
      },
    },
    size: {
      control: "select",
      options: ["fullscreen", "auto"],
      description: "The size behavior of the drawer",
      table: {
        type: { summary: "fullscreen | auto" },
        defaultValue: { summary: "fullscreen" },
      },
    },
    top: {
      control: "number",
      description: "Top position offset in pixels",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    drawerZindex: {
      control: "number",
      description: "Z-index of the drawer element",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    overlayZindex: {
      control: "number",
      description: "Z-index of the overlay element",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "11" },
      },
    },
    overlayOpacity: {
      control: "number",
      description: "Opacity of the overlay background (0-1)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0.5" },
      },
    },
    overlayColor: {
      control: "color",
      description: "Background color of the overlay",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "rgba(0, 0, 0, 0.5)" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS class names",
      table: {
        type: { summary: "string" },
      },
    },
    onClose: {
      description: "Callback function called when the drawer should close",
      table: {
        type: { summary: "() => void" },
      },
    },
    children: {
      description: "Content to be rendered inside the drawer",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground for the Drawer component.
 * Use this story to experiment with all available props.
 */
export const DrawerPlayground: Story = {
  args: {
    open: true,
    position: "left",
    size: "fullscreen",
    top: 0,
    drawerZindex: 1000,
    overlayZindex: 999,
    overlayOpacity: 0.5,
    overlayColor: "rgba(0, 0, 0, 0.5)",
    children: (
      <div
        style={{
          padding: "20px",
          border: "1px solid black",
          height: "100%",
          width: "450px",
        }}
      >
        <h2>Drawer Playground</h2>
        <p>Experiment with different props in the controls panel below.</p>
      </div>
    ),
    onClose: () => {},
  },
  tags: ["!autodocs"],
};

/**
 * Default drawer configuration with left positioning.
 * This is the most common use case for navigation menus.
 */
export const Default: Story = {
  args: {
    open: true,
    position: "left",
    children: (
      <div style={{ padding: "20px", border: "1px solid black" }}>
        <h2>Drawer Content</h2>
        <p>This is a basic drawer with default configuration.</p>
      </div>
    ),
    onClose: () => alert("Drawer closed"),
  },
  tags: ["!dev"], //Hide in storybook navbar
};

/**
 * Right-positioned drawer example.
 * Commonly used for shopping carts or detail panels.
 */
export const RightDrawer: Story = {
  args: {
    ...Default.args,
    position: "right",
    children: (
      <div
        style={{ padding: "20px", border: "1px solid black", width: "450px" }}
      >
        <h2>Right Drawer</h2>
        <p>This drawer slides in from the right side.</p>
      </div>
    ),
    size: "auto",
    overlay: true,
    top: 0,
    drawerZindex: 11,
    overlayZindex: 1,
    style: {},
  },
  tags: ["!dev"], //Hide in storybook navbar
};

/**
 * Top-positioned drawer example.
 * Useful for notifications or global actions.
 */
export const TopDrawer: Story = {
  args: {
    open: true,
    position: "top",
    size: "fullscreen",
    children: (
      <div
        style={{ padding: "20px", border: "1px solid black", height: "100%" }}
      >
        <h2>Top Drawer</h2>
        <p>This drawer slides down from the top.</p>
      </div>
    ),
    onClose: () => alert("Drawer closed"),
  },
};

/**
 * Bottom-positioned drawer example.
 * Perfect for mobile navigation or action sheets.
 */
export const BottomDrawer: Story = {
  args: {
    ...Default.args,
    position: "bottom",
    children: (
      <div style={{ padding: "20px", border: "1px solid black" }}>
        <h2>Bottom Drawer</h2>
        <p>This drawer slides up from the bottom.</p>
      </div>
    ),
  },
  tags: ["!dev"], //Hide in storybook navbar
};

/**
 * Auto-sized drawer example.
 * The drawer height adjusts to fit its content.
 * Useful when the content length is variable.
 */
export const AutoSizedDrawer: Story = {
  args: {
    ...Default.args,
    size: "auto",
    children: (
      <div style={{ padding: "20px", border: "1px solid black" }}>
        <h2>Auto-sized Drawer</h2>
        <p>This drawer adjusts its size based on content.</p>
        <p>Try adding more content to see it grow.</p>
      </div>
    ),
  },
  tags: ["!dev"], //Hide in storybook navbar
};

/**
 * Custom styled drawer example.
 * Demonstrates the styling capabilities of the drawer.
 * Shows how to customize overlay and z-index settings.
 */
export const CustomStyledDrawer: Story = {
  args: {
    ...Default.args,
    className: "custom-drawer",
    overlayColor: "rgba(0, 0, 0, 0.8)",
    overlayOpacity: 0.8,
    drawerZindex: 1000,
    overlayZindex: 999,
    children: (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f5f5f5",
          border: "1px solid black",
        }}
      >
        <h2>Custom Styled Drawer</h2>
        <p>This drawer has custom styling applied.</p>
        <ul>
          <li>Custom overlay color and opacity</li>
          <li>Custom z-index values</li>
          <li>Custom background color</li>
        </ul>
      </div>
    ),
  },
  tags: ["!dev"], //Hide in storybook navbar
};
