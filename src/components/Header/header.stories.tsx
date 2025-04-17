import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@/providers/ThemeProvider";

import Header from "./index";

/**
 * A responsive header component that provides navigation and branding for the application.
 *
 * ## Features
 * - Responsive design with mobile menu
 * - Customizable logo with floating and rounded options
 * - Sticky behavior on scroll
 * - React Router integration
 * - Accessibility support
 * - Toggle boxshadow for the logo
 * - Dynamic header height, navigation color, header background color for now its works only in mobile view.
 * - Support custom classname to override the css
 *
 * ## Usuage
 * ```tsx
 * <Header
 *   logo="/logo.png"
 *   navLink={[
 *     { url: "/", label: "Home" },
 *     { url: "/about", label: "About" }
 *   ]}
 *  shouldLogoFloat={false}
 *  isLogoRounded={false}
 *  boxShadowOnLogo = {false}
 *  headerHeight = "90px"  // default
 *  navColor = "#000"
 *  navHoverColor = "grey"
 *  navActiveColor = "grey"
 *  headerBgColor = "#fff" //bg color only works for mobile view
 *  className="custom-classname"
 * />
 * ```
 *
 */
const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    logo: {
      control: "text",
      description: "URL of the logo image. If not provided, uses default logo",
      defaultValue: "URL",
      table: {
        defaultValue: { summary: "asset/image/logo.png" },
      },
    },
    navLink: {
      control: "object",
      description: "Array of navigation links with url and label properties",
      table: {
        defaultValue: { summary: "required" },
      },
    },
    shouldLogoFloat: {
      control: "boolean",
      description: "Whether the logo should float below the header",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isLogoRounded: {
      control: "boolean",
      description: "Whether the logo should have rounded corners",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    boxShadowOnLogo: {
      control: "boolean",
      description: "Whether the logo should have box shadow ",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    headerBgColor: {
      control: "text",
      description:
        "Custom header background color, For now custom background only works for mobile view",
      table: {
        defaultValue: { summary: "#fff" },
      },
    },
    headerHeight: {
      control: "text",
      description:
        "Customize the height of the header. Please use the value in pixel",
      table: {
        defaultValue: { summary: "90px" },
      },
    },
    LinkComponent: {
      control: "text",
      description:
        "It is for the routing purpose, If nothing is given then as a default it will be a tag. for example pass the routing component.",
      table: {
        defaultValue: { summary: "html a tag" },
      },
    },
    navColor: {
      control: "text",
      description: "Color of navigation",
      table: {
        defaultValue: { summary: "#000" },
      },
    },
    navActiveColor: {
      control: "text",
      description: "Navigation link color for active nav",
      table: {
        defaultValue: { summary: "grey" },
      },
    },
    navHoverColor: {
      control: "text",
      description: "Navigation hover color",
      table: {
        defaultValue: { summary: "grey" },
      },
    },
    className: {
      control: "text",
      description: "Custom classname to override the style",
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider>
          <div style={{ width: "100%", height: "100%" }}>
            <Story />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultNavLinks = [
  { url: "/", label: "Home" },
  { url: "/about", label: "About" },
  { url: "/menu", label: "Menu" },
  { url: "/contact", label: "Contact" },
];

/**
 * Interactive playground for the Header component.
 * Use the controls panel to experiment with different props.
 */
export const HeaderPlayground: Story = {
  args: {
    logo: "/logo.png",
    navLink: defaultNavLinks,
  },
  render: (args) => (
    <div style={{ border: "1px solid black" }}>
      <Header {...args} />
    </div>
  ),
  tags: ["!autodocs", "dev"],
};

/**
 * Default Header with standard navigation
 */
export const Default: Story = {
  args: {
    logo: "/logo.png",
    navLink: defaultNavLinks,
  },
  tags: ["!dev"],
};

/**
 * Header with external image as logo
 */
export const CustomLogo: Story = {
  args: {
    logo: "https://picsum.photos/400/300",
    navLink: defaultNavLinks,
  },
  tags: ["!dev"],
};

/**
 * Header with logo floating below the header
 */
export const FloatingLogo: Story = {
  args: {
    logo: "/custom-logo.png",
    navLink: defaultNavLinks,
    shouldLogoFloat: true,
  },
  tags: ["!dev"],
};

/**
 * Header with rounded logo corners
 */
export const RoundedLogo: Story = {
  args: {
    logo: "/custom-logo.png",
    navLink: defaultNavLinks,
    isLogoRounded: true,
  },
  tags: ["!dev"],
};

/**
 * Header with different nav color
 */
export const DifferentNavcolor: Story = {
  args: {
    logo: "/custom-logo.png",
    navLink: defaultNavLinks,
    isLogoRounded: true,
    navActiveColor: "rgb(14, 168, 96)",
    navHoverColor: "rgb(14, 168, 96)",
    navColor: "rgb(14, 168, 96)",
  },
  tags: ["!dev"],
};
