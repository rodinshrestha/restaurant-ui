import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import ContactForm, { ContactFormProps } from "./index";
import { StyledDiv } from "./style";
import { theme } from "../../theme";

const meta: Meta<typeof ContactForm> = {
  title: "Modules/ContactForm",
  component: ContactForm,
  parameters: {
    layout: "fullscreen",
    docs: {
      autodocs: true,
    },
    options: {
      showPanel: true,
    },
    viewMode: "docs",
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
    // Define your argTypes here for better Storybook controls
    initialValues: {
      control: "object",
      description: "Initial form values",
    },
    onSubmit: {
      action: "submitted",
      description: "Form submission handler",
    },
  },
} satisfies Meta<typeof ContactForm>;
export default meta;

type Story = StoryObj<typeof ContactForm>;

/**
 * Basic usage of the ContactForm component.
 * This form includes fields for name, email, and message with validation.
 */
export const Basic: Story = {
  // Use args instead of render for simpler stories
  args: {
    initialValues: {
      name: "John Doe",
      email: "john@example.com",
      message: "Hello world",
    },
  },
};

/**
 * ContactForm with all fields in a loading state.
 * This shows how the form looks when submitting data.
 */
export const LoadingState: Story = {
  args: {
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
  },

  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the loading state of the ContactForm when submitting data.",
      },
    },
  },
  render: (args) => {
    return <ContactForm {...(args as ContactFormProps)} />;
  },
};

/**
 * Playground where you can experiment with the ContactForm component.
 * Use Storybook controls to modify props and see how the component behaves.
 */
export const Playground: Story = {
  args: {
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Experiment with the ContactForm component using Storybook controls.",
      },
    },
  },
};

/**
 * Documentation for the ContactForm component.
 * This story is used to display comprehensive docs in Storybook.
 */
export const Documentation: Story = {
  render: () => (
    <div>
      <h1>ContactForm Component</h1>
      <p>
        The ContactForm component provides a user interface for submitting
        contact information with built-in validation.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Form validation using Formik</li>
        <li>Responsive layout</li>
        <li>Loading state during submission</li>
        <li>Error handling with toast notifications</li>
      </ul>

      <h2>Usage</h2>
      <p>Import the component and use it in your React application:</p>
      <pre>
        {`import ContactForm from "@/modules/Contact/ContactForm";\n\n<ContactForm />`}
      </pre>

      <h2>Form Fields</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Text</td>
            <td>Required field for user's name</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>Email</td>
            <td>Required field with email validation</td>
          </tr>
          <tr>
            <td>Message</td>
            <td>Textarea</td>
            <td>Required field for the contact message</td>
          </tr>
        </tbody>
      </table>

      <h2>Validation</h2>
      <p>The form validates that:</p>
      <ul>
        <li>All fields are required</li>
        <li>Email must be in a valid format</li>
        <li>Message must not be empty</li>
      </ul>

      <h2>Styling</h2>
      <p>
        The form uses styled-components for styling. The main wrapper has a
        right border and flex layout:
      </p>
      <pre>
        {`export const StyledDiv = styled.div\`
  ${StyledDiv}
\``}
      </pre>

      <h2>Behavior</h2>
      <p>On successful submission:</p>
      <ul>
        <li>Shows a success toast notification</li>
        <li>Resets the form</li>
      </ul>
      <p>On error:</p>
      <ul>
        <li>Shows an error toast notification</li>
        <li>Keeps the form data for correction</li>
      </ul>

      <h2>Examples</h2>
      <p>See the other stories for interactive examples:</p>
      <ul>
        <li>Basic - Default form behavior</li>
        <li>LoadingState - Form during submission</li>
        <li>Playground - Experiment with the component</li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      disable: true, // We don't want to show the docs page for this story
    },
  },
};
