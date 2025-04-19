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
 * - Dynamic logo height and logo width
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
 *  logoHeight: "",
 *  logoWidth: "",
 * />
 * ```
 *
 * ## Props
 * - `logo`: URL of the logo image. If not provided, uses default logo
 * - `navlink`: Array of navigation links with url and label properties
 * - `shouldLogoFloat`: Whether the logo should float below the header
 * - `isLogoRounded`: Whether the logo should have rounded corners
 */
const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
      viewports: {
        mobile1: {
          name: "iPhone 12 Pro",
          styles: {
            width: "390px",
            height: "844px",
          },
        },
        mobile2: {
          name: "iPhone 12 Pro Max",
          styles: {
            width: "428px",
            height: "926px",
          },
        },
        tablet: {
          name: "iPad",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1440px",
            height: "900px",
          },
        },
      },
    },
  },
  argTypes: {
    logo: {
      control: "text",
      description: "URL of the logo image. If not provided, uses default logo",
    },
    navLink: {
      control: "object",
      description: "Array of navigation links with url and label properties",
    },
    shouldLogoFloat: {
      control: "boolean",
      description: "Whether the logo should float below the header",
    },
    isLogoRounded: {
      control: "boolean",
      description: "Whether the logo should have rounded corners",
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
    logoHeight: "",
    logoWidth: "",
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
    logoHeight: "",
    logoWidth: "",
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
 * Header with minimal navigation items
 */
export const MinimalNavigation: Story = {
  args: {
    logo: "/logo.png",
    navLink: [
      { url: "/", label: "Home" },
      { url: "/about", label: "About" },
    ],
  },
  tags: ["!dev"],
};

/**
 * Header with extended navigation menu
 */
export const ExtendedNavigation: Story = {
  args: {
    logo: "/logo.png",
    navLink: [
      ...defaultNavLinks,
      { url: "/gallery", label: "Gallery" },
      { url: "/blog", label: "Blog" },
      { url: "/reservations", label: "Reservations" },
    ],
  },
  tags: ["!dev"],
};

/**
 * Header using default logo
 */
export const NoLogo: Story = {
  args: {
    navLink: defaultNavLinks,
  },
  tags: ["!dev"],
};

/**
 * Header with long navigation labels
 */
export const LongLabels: Story = {
  args: {
    logo: "/logo.png",
    navLink: [
      { url: "/", label: "Home" },
      { url: "/about-us", label: "About Our Restaurant" },
      { url: "/menu", label: "Our Delicious Menu" },
      { url: "/contact-us", label: "Get in Touch With Us" },
      { url: "/reservations", label: "Make a Reservation" },
    ],
  },
  tags: ["!dev"],
};
