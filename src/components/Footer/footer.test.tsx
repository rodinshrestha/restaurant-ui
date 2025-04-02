import { screen } from "@testing-library/react";
import { expect } from "vitest";

import { render } from "@/utils/render";

import Footer from "./index";

describe("Footer Component", () => {
  describe("Rendering", () => {
    it("renders with default footer text", () => {
      render(<Footer />);
      expect(screen.getByTestId("footer-wrapper")).toBeInTheDocument();
      expect(screen.getByTestId("footer-content")).toHaveTextContent(
        "Footer Text",
      );
    });

    it("renders with custom footer text", () => {
      const customText = "Custom Footer Text";
      render(<Footer footerText={customText} />);
      expect(screen.getByTestId("footer-content")).toHaveTextContent(
        customText,
      );
    });
  });
});
