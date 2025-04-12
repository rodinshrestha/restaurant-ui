import { ReactElement } from "react";

import clsx from "clsx";

import Link from "@/components/Link";

import { StyledUl } from "./style";
import { NavLinkType } from "../../types/header.types";

type Props = {
  navLink: NavLinkType;
  LinkComponent?: ReactElement;
};

const HeaderMenu = ({ navLink, LinkComponent }: Props) => {
  return (
    <StyledUl className="menu-list-wrapper">
      {navLink.map((x) => {
        const { pathname } = window.location;

        const active = pathname === x.url;
        return (
          <li className={clsx("link-item", { active })} key={x.url}>
            <Link to={x.url} LinkComponent={LinkComponent}>
              {x.label}
            </Link>
          </li>
        );
      })}
    </StyledUl>
  );
};

export default HeaderMenu;
