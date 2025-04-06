import clsx from "clsx";
import { Link } from "react-router-dom";

import { StyledUl } from "./style";
import { NavLinkType } from "../../types/header.types";

type Props = {
  navLink: NavLinkType;
};

const HeaderMenu = ({ navLink }: Props) => {
  return (
    <StyledUl className="menu-list-wrapper">
      {navLink.map((x) => {
        const { pathname } = window.location;

        const active = pathname === x.url;
        return (
          <li className={clsx("link-item", { active })} key={x.url}>
            <Link to={x.url}>{x.label}</Link>
          </li>
        );
      })}
    </StyledUl>
  );
};

export default HeaderMenu;
