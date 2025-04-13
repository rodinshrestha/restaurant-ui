import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@/providers/ThemeProvider";

import InputTextArea from "./index";

/**
 * The InputTextArea component is a versatile text area input component that provides a consistent and accessible way to collect multi-line user input.
 * It supports various states including error states, disabled states, and includes built-in label and error message support.
 *
 * ## Features
 * - Customizable label
 * - Error state handling with error messages
 * - Disabled state
 * - Placeholder text
 * - Configurable rows and columns
 * - Full TypeScript support
 * - Consistent styling with theme integration
 *
 * ## Usage
 * ```tsx
 * import { InputTextArea } from "restaurant-ui";
 *
 * <InputTextArea
 *   id="description"
 *   name="description"
 *   label="Description"
 *   placeholder="Enter your description"
 *   rows={4}
 *   cols={50}
 *   value={value}
 *   onChange={handleChange}
 * />
 * ```
 *
 * ## Props
 *
 * | Prop | Type | Default | Description |
 * |------|------|---------|-------------|
 * | id | string | - | Unique identifier for the textarea |
 * | name | string | - | Name attribute for the textarea |
 * | rows | number | - | Number of visible text lines |
 * | cols | number | - | Number of visible text columns |
 * | label | string | - | Label text for the textarea |
 * | placeholder | string | - | Placeholder text for the textarea |
 * | value | string | - | Current value of the textarea |
 * | error | boolean | false | Whether the textarea is in an error state |
 * | touched | boolean | false | Whether the textarea has been touched |
 * | disabled | boolean | false | Whether the textarea is disabled |
 * | errorMsg | string | - | Error message to display when in error state |
 * | className | string | - | Additional CSS class names |
 *
 * ## Examples
 *
 * ### Basic TextArea
 * Shows a basic textarea with label and placeholder.
 *
 * ### Error State
 * Demonstrates the textarea in an error state with an error message.
 *
 * ### Disabled State
 * Shows a disabled textarea.
 *
 * ### Without Label
 * Demonstrates the textarea without a label.
 *
 * ## Notes
 * - The component uses styled-components for styling
 * - Error state is only shown when both error and touched are true
 * - The component is fully accessible with proper ARIA attributes
 * - Supports all standard HTML textarea attributes
 *
 */
const meta = {
  title: "Components/InputTextArea",
  component: InputTextArea,
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
    id: {
      control: "text",
      description: "Unique identifier for the textarea",
    },
    name: {
      control: "text",
      description: "Name attribute for the textarea",
    },
    rows: {
      control: "number",
      description: "Number of visible text lines",
    },
    cols: {
      control: "number",
      description: "Number of visible text columns",
    },
    label: {
      control: "text",
      description: "Label text for the textarea",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the textarea",
    },
    value: {
      control: "text",
      description: "Current value of the textarea",
    },
    error: {
      control: "boolean",
      description: "Whether the textarea is in an error state",
    },
    touched: {
      control: "boolean",
      description: "Whether the textarea has been touched",
    },
    disabled: {
      control: "boolean",
      description: "Whether the textarea is disabled",
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
} satisfies Meta<typeof InputTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const BasicTextAreaComponent = (args: any) => {
  const [value, setValue] = useState("");
  return (
    <InputTextArea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const WithoutLabelComponent = (args: any) => {
  const [value, setValue] = useState("");
  return (
    <InputTextArea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const TextAreaPlaygroundComponent = (args: any) => {
  const [value, setValue] = useState("");
  return (
    <InputTextArea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

/**
 * Basic TextArea
 *
 * This story demonstrates the default state of the InputTextArea component with a label and placeholder.
 * It shows how the component looks in its most basic form.
 *
 * ```tsx
 * <InputTextArea
 *   id="description"
 *   name="description"
 *   label="Description"
 *   placeholder="Enter your description"
 *   rows={4}
 *   cols={50}
 *   value=""
 * />
 * ```
 */
export const BasicTextArea: Story = {
  args: {
    id: "description",
    name: "description",
    label: "Description",
    placeholder: "Enter your description",
    rows: 4,
    cols: 50,
    value: "",
  },
  render: (args) => <BasicTextAreaComponent {...args} />,
  tags: ["!dev"],
};

/**
 * Disabled State
 *
 * This story demonstrates the InputTextArea component in a disabled state.
 * It shows how the component appears when it's not interactive.
 *
 * ```tsx
 * <InputTextArea
 *   id="description"
 *   name="description"
 *   label="Description"
 *   placeholder="This textarea is disabled"
 *   rows={4}
 *   cols={50}
 *   value=""
 *   disabled={true}
 * />
 * ```
 */
export const DisabledState: Story = {
  args: {
    id: "description",
    name: "description",
    label: "Description",
    placeholder: "This textarea is disabled",
    rows: 4,
    cols: 50,
    value: "",
    disabled: true,
  },
  render: (args) => <InputTextArea {...args} />,
  tags: ["!dev"],
};

/**
 * Without Label
 *
 * This story demonstrates the InputTextArea component without a label.
 * It shows how the component appears when used in a more compact form.
 *
 * ```tsx
 * <InputTextArea
 *   id="description"
 *   name="description"
 *   placeholder="Textarea without label"
 *   rows={4}
 *   cols={50}
 *   value=""
 * />
 * ```
 */
export const WithoutLabel: Story = {
  args: {
    id: "description",
    name: "description",
    placeholder: "Textarea without label",
    rows: 4,
    cols: 50,
    value: "",
  },
  render: (args) => <WithoutLabelComponent {...args} />,
  tags: ["!dev"],
};

/**
 * TextArea Playground
 *
 * This story provides a playground for testing different states and configurations of the InputTextArea component.
 * Use the controls panel to modify the component's props and see how it behaves.
 *
 * ```tsx
 * <InputTextArea
 *   id="playground"
 *   name="playground"
 *   label="Playground TextArea"
 *   placeholder="Try different states"
 *   rows={4}
 *   cols={50}
 *   value=""
 * />
 * ```
 */
export const TextAreaPlayground: Story = {
  args: {
    id: "playground",
    name: "playground",
    label: "Playground TextArea",
    placeholder: "Try different states",
    rows: 4,
    cols: 50,
    value: "",
  },
  render: (args) => <TextAreaPlaygroundComponent {...args} />,
  tags: ["!autodocs"],
};
