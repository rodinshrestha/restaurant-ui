import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";

import Map from "./index";

/**
 * The Map component is a wrapper around GoogleMapReact that provides a simple way to display Google Maps in your application.
 * It supports various configurations including center coordinates, zoom level, and API key.
 *
 * ## Features
 * - Customizable center coordinates
 * - Adjustable zoom level
 * - Google Maps API integration
 * - Responsive design
 * - TypeScript support
 *
 * ## Usage
 * ```tsx
 * import { Map } from "restaurant-ui";
 *
 * <Map
 *   latitude={37.7749}
 *   longitude={-122.4194}
 *   zoomLevel={13}
 *   apiKey="YOUR_GOOGLE_MAPS_API_KEY"
 *   testId="MAP_UNIQUE_TEST_ID"
 * />
 * ```
 *
 * ## Props
 *
 * | Prop | Type | Default | Description |
 * |------|------|---------|-------------|
 * | latitude | number | - | Latitude coordinate for the map center |
 * | longitude | number | - | Longitude coordinate for the map center |
 * | zoomLevel | number | - | Initial zoom level of the map |
 * | apiKey | string | - | Google Maps API key (optional) |
 *
 * ## Examples
 *
 * ### Basic Map
 * Shows a basic map centered on San Francisco.
 *
 * ### New York Map
 * Demonstrates a map centered on New York with a different zoom level.
 *
 * ### London Map
 * Shows a map centered on London with a closer zoom level.
 *
 * ## Notes
 * - The component requires a Google Maps API key to function properly
 * - The map is responsive and will adjust to its container size
 * - All coordinates should be valid latitude and longitude values
 *
 */
const meta = {
  title: "Components/Map",
  component: Map,
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
    latitude: {
      control: "number",
      description: "Latitude coordinate for the map center",
    },
    longitude: {
      control: "number",
      description: "Longitude coordinate for the map center",
    },
    zoomLevel: {
      control: { type: "range", min: 1, max: 20, step: 1 },
      description: "Initial zoom level of the map",
    },
    apiKey: {
      control: "text",
      description: "Google Maps API key",
    },
    testId: {
      control: "text",
      description: "Unique id for test",
    },
  },
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic Map
 *
 * This story demonstrates the default state of the Map component centered on San Francisco.
 * It shows how the component looks in its most basic form.
 *
 * ```tsx
 * <Map
 *   latitude={37.7749}
 *   longitude={-122.4194}
 *   zoomLevel={13}
 * />
 * ```
 */
export const BasicMap: Story = {
  args: {
    latitude: 37.7749,
    longitude: -122.4194,
    zoomLevel: 13,
  },
  tags: ["!dev"],
};

/**
 * New York Map
 *
 * This story demonstrates the Map component centered on New York City.
 * It shows how the component looks with different coordinates and zoom level.
 *
 * ```tsx
 * <Map
 *   latitude={40.7128}
 *   longitude={-74.0060}
 *   zoomLevel={12}
 * />
 * ```
 */
export const NewYorkMap: Story = {
  args: {
    latitude: 40.7128,
    longitude: -74.006,
    zoomLevel: 12,
  },
  tags: ["!dev"],
};

/**
 * London Map
 *
 * This story demonstrates the Map component centered on London.
 * It shows how the component looks with different coordinates and a closer zoom level.
 *
 * ```tsx
 * <Map
 *   latitude={51.5074}
 *   longitude={-0.1278}
 *   zoomLevel={14}
 * />
 * ```
 */
export const LondonMap: Story = {
  args: {
    latitude: 51.5074,
    longitude: -0.1278,
    zoomLevel: 14,
  },
  tags: ["!dev"],
};

/**
 * Map Playground
 *
 * This story provides a playground for testing different configurations of the Map component.
 * Use the controls panel to modify the component's props and see how it behaves.
 *
 * ```tsx
 * <Map
 *   latitude={37.7749}
 *   longitude={-122.4194}
 *   zoomLevel={13}
 * />
 * ```
 */
export const MapPlayground: Story = {
  args: {
    latitude: 37.7749,
    longitude: -122.4194,
    zoomLevel: 13,
  },
  tags: ["!autodocs"],
};
