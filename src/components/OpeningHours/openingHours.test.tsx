import { screen } from "@testing-library/react";
import { expect } from "vitest";

import { render } from "@/utils/render";

import OpeningHours from "./index";

describe("OpeningHours Component", () => {
  const mockProps = {
    lunch_time: "Lunch: 11:00 AM - 3:00 PM",
    open_information: "Open for dine-in and takeout",
    dinner_time: "Dinner: 5:00 PM - 10:00 PM",
    order_online_url: "https://example.com/order",
    address: "123 Restaurant St, City, Country",
    phone_number: "+1 234 567 8900",
  };

  describe("Rendering", () => {
    it("renders hours title", () => {
      render(<OpeningHours {...mockProps} />);
      expect(screen.getByTestId("opening-hours-text")).toBeInTheDocument();
    });

    it("renders lunch time", () => {
      render(<OpeningHours {...mockProps} />);
      expect(
        screen.getByTestId("opening-hours-lunch-time-text"),
      ).toBeInTheDocument();
    });

    it("renders dinner time", () => {
      render(<OpeningHours {...mockProps} />);
      expect(
        screen.getByTestId("opening-hour-dinner-time-text"),
      ).toBeInTheDocument();
    });

    it("renders open information", () => {
      render(<OpeningHours {...mockProps} />);
      expect(
        screen.getByTestId("opening-hour-information"),
      ).toBeInTheDocument();
    });

    it("renders order online button", () => {
      render(<OpeningHours {...mockProps} />);
      const orderButton = screen.getByTestId("opening-hour-order-btn");
      expect(orderButton).toBeInTheDocument();
      expect(orderButton).toHaveAttribute("href", mockProps.order_online_url);
    });

    it("renders address with location icon", () => {
      render(<OpeningHours {...mockProps} />);
      const addressLink = screen.getByTestId("opening-hours-location-link");
      expect(addressLink).toBeInTheDocument();
      expect(addressLink).toHaveAttribute(
        "href",
        `https://www.google.com/maps/search/${mockProps.address}`,
      );
      expect(
        screen.getByTestId("opening-hours-location-icon"),
      ).toBeInTheDocument();
    });

    it("renders phone number with phone icon", () => {
      render(<OpeningHours {...mockProps} />);
      const phoneLink = screen.getByTestId("opening-hours-phone-link");
      expect(phoneLink).toBeInTheDocument();
      expect(phoneLink).toHaveAttribute(
        "href",
        `tel:${mockProps.phone_number}`,
      );
      expect(
        screen.getByTestId("opening-hours-phone-icon"),
      ).toBeInTheDocument();
    });
  });

  describe("Conditional Rendering", () => {
    it("does not render lunch time when not provided", () => {
      const propsWithoutLunch = { ...mockProps, lunch_time: "" };
      render(<OpeningHours {...propsWithoutLunch} />);
      expect(
        screen.queryByTestId("opening-hours-lunch-time-text"),
      ).not.toBeInTheDocument();
    });

    it("does not render dinner time when not provided", () => {
      const propsWithoutDinner = { ...mockProps, dinner_time: "" };
      render(<OpeningHours {...propsWithoutDinner} />);
      expect(
        screen.queryByTestId("opening-hour-dinner-time-text"),
      ).not.toBeInTheDocument();
    });

    it("does not render open information when not provided", () => {
      const propsWithoutInfo = { ...mockProps, open_information: "" };
      render(<OpeningHours {...propsWithoutInfo} />);
      expect(
        screen.queryByTestId("opening-hour-information"),
      ).not.toBeInTheDocument();
    });

    it("does not render order online button when URL not provided", () => {
      const propsWithoutOrder = { ...mockProps, order_online_url: "" };
      render(<OpeningHours {...propsWithoutOrder} />);
      expect(
        screen.queryByTestId("opening-hour-order-btn"),
      ).not.toBeInTheDocument();
    });

    it("does not render address when not provided", () => {
      const propsWithoutAddress = { ...mockProps, address: "" };
      render(<OpeningHours {...propsWithoutAddress} />);
      expect(
        screen.queryByTestId("opening-hours-location-link"),
      ).not.toBeInTheDocument();
    });

    it("does not render phone number when not provided", () => {
      const propsWithoutPhone = { ...mockProps, phone_number: "" };
      render(<OpeningHours {...propsWithoutPhone} />);
      expect(
        screen.queryByTestId("opening-hours-phone-icon"),
      ).not.toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has proper heading structure", () => {
      render(<OpeningHours {...mockProps} />);
      expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument();
    });

    it("has proper link attributes", () => {
      render(<OpeningHours {...mockProps} />);
      const externalLink = screen.getByTestId("opening-hours-location-link");
      expect(externalLink).toHaveAttribute("target", "_blank");
      expect(externalLink).toHaveAttribute("rel", "noreferrer");
    });
  });
});
