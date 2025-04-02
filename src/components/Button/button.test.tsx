import { describe, expect, test, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import "@testing-library/jest-dom";
import { render } from "@/utils/render";
import { theme } from "@/theme";

import Button from "./index";

describe("Button Component", () => {
  test("renders with default props", () => {
    render(<Button skin="contained">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
    expect(button).toHaveClass("contained");
  });

  test("renders with outline skin", () => {
    render(<Button skin="outline">Outline</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("outline");
  });

  test("renders with different sizes", () => {
    const { rerender } = render(
      <Button skin="contained" size="sm">
        Small
      </Button>,
    );
    expect(screen.getByRole("button")).toHaveClass("sm");

    rerender(
      <ThemeProvider theme={theme}>
        <Button skin="contained" size="lg">
          Large
        </Button>
      </ThemeProvider>,
    );
    expect(screen.getByRole("button")).toHaveClass("lg");

    rerender(
      <ThemeProvider theme={theme}>
        <Button skin="contained" size="md">
          Medium
        </Button>
      </ThemeProvider>,
    );
    expect(screen.getByRole("button")).toHaveClass("md");
  });

  test("renders as disabled", () => {
    render(
      <Button skin="contained" disabled>
        Disabled
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("disabled");
    expect(button).toBeDisabled();
  });

  test("renders as link when href is provided", () => {
    render(
      <Button skin="contained" href="https://example.com">
        Link
      </Button>,
    );
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(
      <Button skin="contained" onClick={handleClick}>
        Click me
      </Button>,
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders with custom className", () => {
    render(
      <Button skin="contained" className="custom-class">
        Custom
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  test("renders with custom background color", () => {
    const customBgColor = "#ff0000";
    const color = "#000";

    render(
      <Button skin="contained" bgColor={customBgColor} color={color}>
        Custom Color
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({
      backgroundColor: customBgColor,
      borderColor: customBgColor,
      color: color,
    });
  });

  test("renders link with custom background color", () => {
    const customBgColor = "#0000ff";
    const color = "#000";
    render(
      <Button
        skin="contained"
        href="https://example.com"
        bgColor={customBgColor}
        color={color}
      >
        Custom Link
      </Button>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveStyle({
      backgroundColor: customBgColor,
      borderColor: customBgColor,
      color: color,
    });
  });
});
