import { screen, fireEvent, within } from "@testing-library/react";
import { expect, vi } from "vitest";

import { render } from "@/utils/render";

import Header, { HeaderProps } from "./index";

// Mock the logo import
vi.mock("@/assets/image/logo.png", () => ({
  default: "default-logo.png",
}));

describe("Header Component", () => {
  const mockNavLinks = [
    { url: "/", label: "Home" },
    { url: "/about", label: "About" },
    { url: "/contact", label: "Contact" },
  ];

  const defaultProps: HeaderProps = {
    logo: "test-logo.png",
    navLink: mockNavLinks,
    framework: "REACT",
  };

  describe("Rendering", () => {
    it("renders header with logo", () => {
      render(<Header {...defaultProps} />);
      expect(screen.getByTestId("header-logo")).toHaveAttribute(
        "src",
        defaultProps.logo,
      );
      expect(screen.getByTestId("header-logo")).toHaveAttribute(
        "alt",
        "sherpa kitchen logo",
      );
    });

    it("renders navigation links", () => {
      render(<Header {...defaultProps} />);
      mockNavLinks.forEach((link) => {
        expect(
          screen.getByTestId(`header-nav-link-${link.label}`),
        ).toBeInTheDocument();
      });
    });

    it("render navigation link with next js or react js framework", () => {
      render(<Header {...defaultProps} framework="NEXT" />);
      mockNavLinks.forEach((link) => {
        expect(
          screen.getByTestId(`header-nav-link-${link.label}`),
        ).toHaveAttribute("href", `${link.url}`);
      });
    });

    it("render navigation link with gatsby framework", () => {
      render(<Header {...defaultProps} framework="GATSBY" />);
      mockNavLinks.forEach((link) => {
        expect(
          screen.getByTestId(`header-nav-link-${link.label}`),
        ).toHaveAttribute("to", `${link.url}`);
      });
    });

    it("renders hamburger menu icon", () => {
      render(<Header {...defaultProps} />);
      expect(screen.getByTestId("hamburger-icon")).toBeInTheDocument();
    });

    it("renders with default logo when no logo prop is provided", () => {
      render(<Header navLink={mockNavLinks} framework="REACT" />);
      expect(screen.getByRole("img")).toHaveAttribute(
        "src",
        "default-logo.png",
      );
    });

    it("renders logo in rounded shape", () => {
      render(<Header navLink={mockNavLinks} isLogoRounded framework="REACT" />);
      const logoWrapper = screen.getByTestId("header-logo-wrapper");
      expect(logoWrapper).toHaveStyle({
        borderRadius: "50%",
      });
    });

    it("should float the logo from the header height", () => {
      render(
        <Header navLink={mockNavLinks} shouldLogoFloat framework="REACT" />,
      );
      const menuWrapper = screen.getByTestId("header-logo-wrapper");
      expect(menuWrapper).toHaveStyle({
        width: "140px",
        height: "140px",
      });
    });

    it("should render with custom header height", () => {
      render(
        <Header
          navLink={mockNavLinks}
          headerHeight="180px"
          framework="REACT"
        />,
      );
      const headerWrapper = screen.getByTestId("header-wrapper-id");
      expect(headerWrapper).toHaveStyle({
        height: "180px",
      });
    });

    it("should render the header logo with box-shadow", () => {
      render(
        <Header navLink={mockNavLinks} boxShadowOnLogo framework="REACT" />,
      );
      const logoWrapper = screen.getByTestId("header-logo-wrapper");
      expect(logoWrapper).toHaveClass("box-shadow");
      expect(logoWrapper).toHaveStyle({
        "box-shadow": "0 5px 16px rgba(0, 0, 0, 0.1)",
      });
    });

    it("should render the custom height and width of logo", () => {
      render(
        <Header
          navLink={mockNavLinks}
          logoHeight="150px"
          logoWidth="150px"
          framework="REACT"
        />,
      );
      const logoWrapper = screen.getByTestId("header-logo-wrapper");
      expect(logoWrapper).toHaveStyle({
        height: "150px",
        width: "150px",
      });
    });
  });

  describe("Navigation", () => {
    it("renders correct number of navigation links", () => {
      render(<Header {...defaultProps} />);
      const menuWrapper = screen.getByTestId("header-menu-wrapper");
      const links = within(menuWrapper).getAllByRole("link");
      expect(links).toHaveLength(mockNavLinks.length); // +1 for logo link
    });

    it("renders navigation links with correct URLs", () => {
      render(<Header {...defaultProps} />);
      mockNavLinks.forEach((link) => {
        const menuWrapper = screen.getByTestId("header-menu-wrapper");
        const navLink = within(menuWrapper).getByTestId(
          `header-nav-link-${link.label}`,
        );
        expect(navLink).toHaveAttribute("href", link.url);
      });
    });
  });

  describe("Menu Functionality", () => {
    it("toggles menu when hamburger icon is clicked", () => {
      render(<Header {...defaultProps} />);
      const hamburgerButton = screen.getByTestId("hamburger-icon");

      // Initial state - drawer should be closed
      expect(screen.queryByTestId("drawer-wrapper-test-id")).toHaveStyle({
        height: 0,
        overflow: "hidden",
      });

      // Click hamburger button
      fireEvent.click(hamburgerButton);

      // Drawer should be open
      expect(screen.getByTestId("drawer-wrapper-test-id")).toHaveStyle({
        height: "100%",
      });

      // Click hamburger button again
      fireEvent.click(hamburgerButton);
    });
  });

  describe("Scroll Behavior", () => {
    it("adds sticky class when scrolled", () => {
      render(<Header {...defaultProps} />);
      const header = screen.getByTestId("header");

      // Simulate scroll
      Object.defineProperty(window, "scrollY", {
        value: 100,
        writable: true,
      });
      fireEvent.scroll(window);

      expect(header).toHaveClass("sticky");
    });

    it("removes sticky class when at top", () => {
      render(<Header {...defaultProps} />);
      const header = screen.getByTestId("header");

      // Simulate scroll to top
      Object.defineProperty(window, "scrollY", {
        value: 0,
        writable: true,
      });
      fireEvent.scroll(window);

      expect(header).not.toHaveClass("sticky");
    });
  });

  describe("Accessibility", () => {
    it("has correct ARIA attributes", () => {
      render(<Header {...defaultProps} />);
      expect(screen.getByTestId("header")).toHaveAttribute("id", "header");
      expect(screen.getByTestId("header-logo")).toHaveAttribute(
        "alt",
        "sherpa kitchen logo",
      );
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    it("has clickable logo link", () => {
      render(<Header {...defaultProps} />);
      const logoLink = screen.getByTestId("header-logo-wrapper");
      expect(logoLink).toHaveAttribute("href", "/");
    });
  });
});
