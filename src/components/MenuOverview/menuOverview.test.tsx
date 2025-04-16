import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";

import { render } from "@/utils/render";
import type { DisplayMenuProps } from "@/components/DisplayMenu";

import MenuOverview from "./index";

// Mock the DisplayMenu component since it's a child component
vi.mock("@/components/DisplayMenu", () => ({
  __esModule: true,
  default: ({ menuList }: { menuList: DisplayMenuProps[] }) => (
    <div data-testid="display-menu">
      {menuList.map((item) => (
        <div key={item.name} data-testid={`menu-item-${item.name}`}>
          {item.name}
        </div>
      ))}
    </div>
  ),
}));

describe("MenuOverview", () => {
  const mockMenuList: DisplayMenuProps[] = [
    {
      name: "Spaghetti Carbonara",
      description:
        "Classic Italian pasta with eggs, cheese, pancetta, and black pepper",
      price: "$15.99",
      food_type: ["box", "leaf", "kids", "vegan", "new"],
    },
    {
      name: "Margherita Pizza",
      description:
        "Classic pizza with tomato sauce, mozzarella, and fresh basil",
      price: "$12.99",
      food_type: ["box", "leaf", "kids", "vegan", "new"],
    },
  ];

  it("renders menu title and description correctly", () => {
    render(
      <MenuOverview
        menuTitle="Main Courses"
        menuDescription="Our signature dishes"
        menuList={mockMenuList}
      />,
    );

    expect(screen.getByText("Main Courses")).toBeInTheDocument();
    expect(screen.getByText("Our signature dishes")).toBeInTheDocument();
  });

  it("renders menu items through DisplayMenu component", () => {
    render(
      <MenuOverview
        menuTitle="Main Courses"
        menuDescription="Our signature dishes"
        menuList={mockMenuList}
      />,
    );

    const displayMenu = screen.getByTestId("diplay-menu-test-wrapper");
    expect(displayMenu).toBeInTheDocument();

    mockMenuList.forEach((item) => {
      expect(screen.getByTestId(`menu-item-${item.name}`)).toBeInTheDocument();
    });
  });

  it("renders without description when not provided", () => {
    render(<MenuOverview menuTitle="Desserts" menuList={mockMenuList} />);

    expect(screen.getByTestId("menu-title-test-id")).toBeInTheDocument();
    expect(screen.getByTestId("diplay-menu-test-wrapper")).toBeInTheDocument();
  });

  it("passes correct menu list to DisplayMenu component", () => {
    render(
      <MenuOverview
        menuTitle="Main Courses"
        menuDescription="Our signature dishes"
        menuList={mockMenuList}
      />,
    );

    mockMenuList.forEach((item) => {
      expect(screen.getByTestId(`menu-item-${item.name}`)).toHaveTextContent(
        item.name,
      );
    });
  });
});
