import clsx from "clsx";

import { StyledDiv } from "./style";

export type HamBurgerMenuIconProps = {
  isMenuOpen: boolean;
  onClick: () => void;
  testId?: string;
};

const HamburgerMenuIcon = ({
  isMenuOpen,
  onClick,
  testId,
}: HamBurgerMenuIconProps) => {
  return (
    <StyledDiv
      className={clsx("hamburgerMenu action", {
        "is-active": isMenuOpen,
      })}
      onClick={onClick}
      data-testid={testId || "hamburger-icon"}
    >
      <span />
      <span />
      <span />
    </StyledDiv>
  );
};

export default HamburgerMenuIcon;
