import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";

import OpeningHours from "./index";

/**
 * OpeningHours Component
 *
 * A component that displays restaurant operating hours, contact information, and ordering options.
 * Features include:
 * - Lunch and dinner time display
 * - Last seating time information
 * - Order online button
 * - Location with Google Maps link
 * - Phone number with click-to-call
 * - Responsive design
 *
 * @example
 * ```tsx
 * <OpeningHours
 *   lunch_time="Lunch: 11:00 AM - 3:00 PM"
 *   dinner_time="Dinner: 5:00 PM - 10:00 PM"
 *   open_information="Open for dine-in and takeout"
 *   order_online_url="https://example.com/order"
 *   address="123 Restaurant St"
 *   phone_number="+1 234 567 8900"
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
    lunch_time: {
      control: "text",
      description: "Lunch service hours",
    },
    dinner_time: {
      control: "text",
      description: "Dinner service hours",
    },
    open_information: {
      control: "text",
      description: "Additional opening information",
    },
    order_online_url: {
      control: "text",
      description: "URL for online ordering",
    },
    address: {
      control: "text",
      description: "Restaurant address",
    },
    phone_number: {
      control: "text",
      description: "Contact phone number",
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
  lunch_time: "Lunch: 11:00 AM - 3:00 PM",
  dinner_time: "Dinner: 5:00 PM - 10:00 PM",
  open_information: "Open for dine-in and takeout",
  order_online_url: "https://example.com/order",
  address: "123 Restaurant St, City, Country",
  phone_number: "+1 234 567 8900",
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
