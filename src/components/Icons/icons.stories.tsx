import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";
import emailIcon from "@/assets/icons/email.png";
import phoneIcon from "@/assets/icons/phone-call.png";
import locationIcon from "@/assets/icons/location-pin.png";
import facebookIcon from "@/assets/icons/facebook.png";
import instagramIcon from "@/assets/icons/instagram.png";
import homeIcon from "@/assets/icons/home.png";
import playButtonIcon from "@/assets/icons/play-button.png";
import smartphoneIcon from "@/assets/icons/smartphone-call.png";

import Icons from "./index";

/**
 * The Icons component is a reusable component for displaying icons in a consistent style.
 * It provides a circular background and proper sizing for icons used throughout the application.
 *
 * ## Features
 * - Circular background
 * - Customizable size
 * - Alt text support
 * - Test ID support
 *
 * ## Usage
 * ```tsx
 * import { Icons } from "restaurant-ui";
 *
 * <Icons
 *   icon={emailIcon}
 *   width={25}
 *   height={25}
 *   iconAltTest="Email icon"
 * />
 * ```
 *
 * ## Props
 *
 * | Prop | Type | Default | Description |
 * |------|------|---------|-------------|
 * | icon | string | - | URL or path to the icon image |
 * | width | number | 25 | Width of the icon in pixels |
 * | height | number | 25 | Height of the icon in pixels |
 * | iconAltTest | string | "Icon Image" | Alt text for the icon |
 * | testId | string | "icon-test-id" | Test ID for testing purposes |
 *
 * ## Examples
 *
 * ### Default Size
 * Shows icons with default size (25x25 pixels).
 *
 * ### Custom Size
 * Demonstrates icons with custom dimensions.
 *
 * ### Social Media Icons
 * Shows social media icons with consistent styling.
 *
 * ### Contact Icons
 * Displays contact-related icons (email, phone, location).
 *
 * ## Notes
 * - Icons are displayed with a white circular background
 * - Default size is 25x25 pixels
 * - Alt text is important for accessibility
 * - Test IDs are useful for testing
 */
const meta = {
  title: "Components/Icons",
  component: Icons,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "text",
      description: "URL or path to the icon image",
    },
    width: {
      control: "number",
      description: "Width of the icon in pixels",
    },
    height: {
      control: "number",
      description: "Height of the icon in pixels",
    },
    iconAltTest: {
      control: "text",
      description: "Alt text for the icon",
    },
    testId: {
      control: "text",
      description: "Test ID for testing purposes",
    },
  },
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconsPlayground: Story = {
  args: {
    icon: emailIcon,
    width: 25,
    height: 25,
    iconAltTest: "Email icon",
  },
  tags: ["!autodocs"],
};

/**
 * Default story showing icons with the default size (25x25 pixels).
 */
export const DefaultSize: Story = {
  args: {
    icon: emailIcon,
    iconAltTest: "Email icon",
  },
  tags: ["!dev"],
};

/**
 * Story demonstrating icons with custom dimensions.
 */
export const CustomSize: Story = {
  args: {
    icon: emailIcon,
    width: 40,
    height: 40,
    iconAltTest: "Large email icon",
  },
  tags: ["!dev"],
};

/**
 * Story showing social media icons with consistent styling.
 */
export const SocialMediaIcons: Story = {
  args: {
    icon: facebookIcon,
    iconAltTest: "Social media icon",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Icons {...args} icon={facebookIcon} iconAltTest="Facebook icon" />
      <Icons {...args} icon={instagramIcon} iconAltTest="Instagram icon" />
    </div>
  ),
  tags: ["!dev"],
};

/**
 * Story displaying contact-related icons (email, phone, location).
 */
export const ContactIcons: Story = {
  args: {
    icon: emailIcon,
    iconAltTest: "Contact icon",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Icons {...args} icon={emailIcon} iconAltTest="Email icon" />
      <Icons {...args} icon={phoneIcon} iconAltTest="Phone icon" />
      <Icons {...args} icon={locationIcon} iconAltTest="Location icon" />
    </div>
  ),
  tags: ["!dev"],
};

/**
 * Story showing navigation and action icons.
 */
export const NavigationIcons: Story = {
  args: {
    icon: homeIcon,
    iconAltTest: "Navigation icon",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Icons {...args} icon={homeIcon} iconAltTest="Home icon" />
      <Icons {...args} icon={playButtonIcon} iconAltTest="Play button icon" />
      <Icons {...args} icon={smartphoneIcon} iconAltTest="Smartphone icon" />
    </div>
  ),
  tags: ["!dev"],
};
