import { ReactElement } from "react";

import clsx from "clsx";

import Link from "@/components/Link";
import { FrameworkType } from "@/types/framework.types";

import { StyledUl } from "./style";
import { NavLinkType } from "../../types/header.types";

type Props = {
  navLink: NavLinkType;
  framework: FrameworkType;
  currentPath: string;
  LinkComponent?: ReactElement;
  headerBgColor?: string;
  navColor?: string;
  navHoverColor?: string;
  navActiveColor?: string;
};

const HeaderMenu = ({
  navLink,
  LinkComponent,
  headerBgColor,
  navColor,
  navHoverColor,
  navActiveColor,
  currentPath,
  framework,
}: Props) => {
  return (
    <StyledUl
      className="menu-list-wrapper"
      $bgcolor={headerBgColor}
      $navcolor={navColor}
      $navhovercolor={navHoverColor}
      $navactivecolor={navActiveColor}
    >
      {navLink.map((x) => {
        const active = currentPath === x.url;

        return (
          <li className={clsx("link-item", { active })} key={x.url}>
            <Link
              to={x.url}
              LinkComponent={LinkComponent}
              testId="header-nav-link-id"
              framework={framework}
            >
              {x.label}
            </Link>
          </li>
        );
      })}
    </StyledUl>
  );
};

export default HeaderMenu;
