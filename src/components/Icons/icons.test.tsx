import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";

import "@testing-library/jest-dom";

import emailIcon from "@/assets/icons/email.png";
import phoneIcon from "@/assets/icons/phone-call.png";

import Icons from "./index";

describe("Icons Component", () => {
  // Test default rendering
  it("renders with default props", () => {
    render(<Icons icon={emailIcon} />);
    const iconElement = screen.getByTestId("icon-test-id");

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("src", emailIcon);
    expect(iconElement).toHaveAttribute("width", "25");
    expect(iconElement).toHaveAttribute("height", "25");
    expect(iconElement).toHaveAttribute("alt", "Icon Image");
  });

  // Test custom props
  it("renders with custom props", () => {
    const customProps = {
      icon: phoneIcon,
      width: 40,
      height: 40,
      iconAltTest: "Custom Phone Icon",
      testId: "custom-icon-test-id",
    };

    render(<Icons {...customProps} />);
    const iconElement = screen.getByTestId(customProps.testId);

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("src", phoneIcon);
    expect(iconElement).toHaveAttribute("width", customProps.width.toString());
    expect(iconElement).toHaveAttribute(
      "height",
      customProps.height.toString(),
    );
    expect(iconElement).toHaveAttribute("alt", customProps.iconAltTest);
  });

  // Test wrapper styling
  it("applies correct wrapper styling", () => {
    const { container } = render(<Icons icon={emailIcon} />);
    const wrapper = container.firstChild;

    expect(wrapper).toHaveStyle({
      background: "white",
      borderRadius: "50%",
      height: "45px",
      width: "45px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    });
  });

  // Test multiple icons
  it("renders multiple icons correctly", () => {
    render(
      <div data-testid="multiple-icons">
        <Icons icon={emailIcon} testId="email-icon" />
        <Icons icon={phoneIcon} testId="phone-icon" />
      </div>,
    );

    const container = screen.getByTestId("multiple-icons");
    const emailIconElement = screen.getByTestId("email-icon");
    const phoneIconElement = screen.getByTestId("phone-icon");

    expect(container).toBeInTheDocument();
    expect(emailIconElement).toBeInTheDocument();
    expect(phoneIconElement).toBeInTheDocument();
    expect(emailIconElement).toHaveAttribute("src", emailIcon);
    expect(phoneIconElement).toHaveAttribute("src", phoneIcon);
  });
});
