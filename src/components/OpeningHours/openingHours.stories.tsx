import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";

import OpeningHours from "./index";

/**
 * OpeningHours Component
 *
 * A component that displays restaurant operating hours, contact information, and ordering options.
 * ## Features include:
 * - Lunch and dinner time display
 * - Last seating time information
 * - Order online button with customizable label
 * - Location with Google Maps link
 * - Phone number with click-to-call
 * - Customizable hours title
 * - Customizable background image
 * - Overlay feature
 * - Responsive design
 *
 * @example
 * ```tsx
 * <OpeningHours
 *   lunchTime="11:00 AM - 3:00 PM"
 *   dinnerTime="5:00 PM - 10:00 PM"
 *   openInformation="Open for dine-in and takeout"
 *   lastTableSeated="Last table seated at 9:30 PM"
 *   orderOnlineUrl="https://example.com/order"
 *   address="123 Restaurant St"
 *   phoneNumber="+1 234 567 8900"
 *   orderBtnLabel="ORDER ONLINE"
 *   hoursTitle="Hours:"
 *   bgImage="path/to/custom-background.jpg"
 *   enableOverlay="true"
 * />
 * ```
 */
const meta = {
  title: "Components/OpeningHours",
  component: OpeningHours,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    lunchTime: {
      control: "text",
      description: "Lunch service hours",
    },
    dinnerTime: {
      control: "text",
      description: "Dinner service hours",
    },
    openInformation: {
      control: "text",
      description: "Additional opening information",
    },
    lastTableSeated: {
      control: "text",
      description: "Last table seating time information",
    },
    orderOnlineUrl: {
      control: "text",
      description: "URL for online ordering",
    },
    address: {
      control: "text",
      description: "Restaurant address",
    },
    phoneNumber: {
      control: "text",
      description: "Contact phone number",
    },
    orderBtnLabel: {
      control: "text",
      description: "Custom label for the order button",
    },
    hoursTitle: {
      control: "text",
      description: "Custom title for the hours section",
    },
    bgImage: {
      control: "text",
      description: "Custom background image path",
    },
    enbaleOverlay: {
      control: "boolean",
      description:
        "Enable the overlay for background image. Helps to ready the text properly",
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
} satisfies Meta<typeof OpeningHours>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
  lunchTime: "11:00 AM - 3:00 PM",
  dinnerTime: "5:00 PM - 10:00 PM",
  openInformation: "Open for dine-in and takeout",
  lastTableSeated: "Last table seated at 9:30 PM",
  orderOnlineUrl: "https://example.com/order",
  address: "123 Restaurant St, City, Country",
  phoneNumber: "+1 234 567 8900",
  orderBtnLabel: "ORDER ONLINE",
  hoursTitle: "Hours:",
};

/**
 * Interactive playground for the OpeningHours component.
 * Use the controls panel to experiment with different props.
 */
export const OpeningHoursPlayground: Story = {
  args: defaultProps,
  tags: ["!autodocs"],
};

/**
 * Default OpeningHours with all features enabled
 */
export const Default: Story = {
  args: defaultProps,
  tags: ["!dev"],
};

/**
 * OpeningHours with custom button label and hours title
 */
export const CustomLabels: Story = {
  args: {
    ...defaultProps,
    orderBtnLabel: "RESERVE A TABLE",
    hoursTitle: "Our Operating Hours:",
  },
  tags: ["!dev"],
};

/**
 * OpeningHours with custom background image
 */
export const CustomBackground: Story = {
  args: {
    ...defaultProps,
    bgImage:
      "https://ucarecdn.com/1f18f5f0-443f-4211-86f3-7b1ad2f55bcf/-/progressive/yes/-/format/auto/-/resize/2000x/&quot",
  },
  tags: ["!dev"],
};

/**
 * OpeningHours with custom background image with overlay
 */
export const CustomBackgroundWithOverlay: Story = {
  args: {
    ...defaultProps,
    enbaleOverlay: true,
    bgImage:
      "https://ucarecdn.com/1f18f5f0-443f-4211-86f3-7b1ad2f55bcf/-/progressive/yes/-/format/auto/-/resize/2000x/&quot",
  },
  tags: ["!dev"],
};

/**
 * OpeningHours with minimal information
 */
export const Minimal: Story = {
  args: {
    lunchTime: "11:00 AM - 3:00 PM",
    dinnerTime: "5:00 PM - 10:00 PM",
    openInformation: "Open for dine-in",
    lastTableSeated: "Last table seated at 9:30 PM",
    orderOnlineUrl: "https://example.com/order",
    address: "123 Restaurant St",
    phoneNumber: "+1 234 567 8900",
  },
  tags: ["!dev"],
};
