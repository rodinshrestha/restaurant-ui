import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";

import InputField from "./index";

/**
 * The input field component is a versatile form input component that provides a consistent and accessible way to collect user input.
 * It supports various states including error states, disabled states, and includes built-in label and error message support.
 *
 * ## Features
 * - Customizable label
 * - Error state handling with error messages
 * - Disabled state
 * - Placeholder text
 * - Full TypeScript support
 * - Consistent styling with theme integration
 *
 * ## Usage
 * ```tsx
 * import { InputField } from "restaurant-ui";
 *
 * <InputField
 *   name="username"
 *   label="Username"
 *   placeholder="Enter your username"
 *   value={value}
 *   onChange={handleChange}
 * />
 * ```
 *
 * ## Props
 *
 * | Prop | Type | Default | Description |
 * |------|------|---------|-------------|
 * | name | string | - | Name attribute for the input field |
 * | label | string | - | Label text for the input field |
 * | placeholder | string | - | Placeholder text for the input field |
 * | value | string | - | Current value of the input field |
 * | error | boolean | false | Whether the input is in an error state |
 * | touched | boolean | false | Whether the input has been touched |
 * | disabled | boolean | false | Whether the input is disabled |
 * | errorMsg | string | - | Error message to display when in error state |
 * | className | string | - | Additional CSS class names |
 *
 * ## Examples
 *
 * ### Basic Input
 * Shows a basic input field with label and placeholder.
 *
 * ### Error State
 * Demonstrates the input field in an error state with an error message.
 *
 * ### Disabled State
 * Shows a disabled input field.
 *
 * ### Without Label
 * Demonstrates the input field without a label.
 *
 * ## Notes
 * - The component uses styled-components for styling
 * - Error state is only shown when both error and touched are true
 * - The component is fully accessible with proper ARIA attributes
 * - Supports all standard HTML input attributes
 *
 */
const meta = {
  title: "Components/InputField",
  component: InputField,
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
    name: {
      control: "text",
      description: "Name attribute for the input field",
    },
    label: {
      control: "text",
      description: "Label text for the input field",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input field",
    },
    value: {
      control: "text",
      description: "Current value of the input field",
    },
    error: {
      control: "boolean",
      description: "Whether the input is in an error state",
    },
    touched: {
      control: "boolean",
      description: "Whether the input has been touched",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    errorMsg: {
      control: "text",
      description: "Error message to display when in error state",
    },
    className: {
      control: "text",
      description: "Additional CSS class names",
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

const BasicInputComponent = (args: any) => {
  const [value, setValue] = useState("");
  return (
    <InputField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const ErrorStateComponent = (args: any) => {
  const [value, setValue] = useState("invalid-email");
  return (
    <InputField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const WithoutLabelComponent = (args: any) => {
  const [value, setValue] = useState("");
  return (
    <InputField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const InputPlaygroundComponent = (args: any) => {
  const [value, setValue] = useState("");
  return (
    <InputField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

/**
 * Basic Input Field
 *
 * This story demonstrates the default state of the InputField component with a label and placeholder.
 * It shows how the component looks in its most basic form.
 *
 * ```tsx
 * <InputField
 *   name="username"
 *   label="Username"
 *   placeholder="Enter your username"
 *   value=""
 * />
 * ```
 */
export const BasicInput: Story = {
  args: {
    name: "username",
    label: "Username",
    placeholder: "Enter your username",
    value: "",
  },
  render: (args) => <BasicInputComponent {...args} />,
  tags: ["!dev"],
};

/**
 * Error State
 *
 * This story demonstrates the InputField component in an error state.
 * It shows how the component displays error messages when validation fails.
 *
 * ```tsx
 * <InputField
 *   name="email"
 *   label="Email"
 *   placeholder="Enter your email"
 *   value="invalid-email"
 *   error={true}
 *   touched={true}
 *   errorMsg="Please enter a valid email address"
 * />
 * ```
 */
export const ErrorState: Story = {
  args: {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    value: "invalid-email",
    error: true,
    touched: true,
    errorMsg: "Please enter a valid email address",
  },
  render: (args) => <ErrorStateComponent {...args} />,
  tags: ["!dev"],
};

/**
 * Disabled State
 *
 * This story demonstrates the InputField component in a disabled state.
 * It shows how the component appears when it's not interactive.
 *
 * ```tsx
 * <InputField
 *   name="disabled-input"
 *   label="Disabled Input"
 *   placeholder="This input is disabled"
 *   value=""
 *   disabled={true}
 * />
 * ```
 */
export const DisabledState: Story = {
  args: {
    name: "disabled-input",
    label: "Disabled Input",
    placeholder: "This input is disabled",
    value: "",
    disabled: true,
  },
  render: (args) => <InputField {...args} />,
  tags: ["!dev"],
};

/**
 * Without Label
 *
 * This story demonstrates the InputField component without a label.
 * It shows how the component appears when used in a more compact form.
 *
 * ```tsx
 * <InputField
 *   name="no-label"
 *   placeholder="Input without label"
 *   value=""
 * />
 * ```
 */
export const WithoutLabel: Story = {
  args: {
    name: "no-label",
    placeholder: "Input without label",
    value: "",
  },
  render: (args) => <WithoutLabelComponent {...args} />,
  tags: ["!dev"],
};

/**
 * Input Playground
 *
 * This story provides a playground for testing different states and configurations of the InputField component.
 * Use the controls panel to modify the component's props and see how it behaves.
 *
 * ```tsx
 * <InputField
 *   name="playground"
 *   label="Playground Input"
 *   placeholder="Try different states"
 *   value=""
 * />
 * ```
 */
export const InputPlayground: Story = {
  args: {
    name: "playground",
    label: "Playground Input",
    placeholder: "Try different states",
    value: "",
  },
  render: (args) => <InputPlaygroundComponent {...args} />,
  tags: ["!autodocs"],
};
