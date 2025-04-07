import React from "react";

import { Link } from "react-router-dom";
import clsx from "clsx";

import defaultLogo from "@/assets/image/logo.png";

import HamburgerMenuIcon from "../HamburgerIcon";
import { StyledDiv } from "./style";
import ImageWithFallBack from "../ImageWithFallBack";
import { Container } from "../Container";
import { Row } from "../Row";
import { Col } from "../Col";
import Drawer from "../Drawer";
import { NavLinkType } from "./types/header.types";
import HeaderMenu from "./components/HeaderMenu";

export type HeaderProps = {
  navLink: NavLinkType;
  logo?: string;
  shouldLogoFloat?: boolean;
  isLogoRounded?: boolean;
};

const Header = ({
  logo,
  navLink,
  shouldLogoFloat = false,
  isLogoRounded = false,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = React.useState(false);

  React.useEffect(() => {
    const detectScroll = () => {
      setIsHeaderSticky(window.scrollY >= 73);
    };

    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);

  return (
    <>
      <StyledDiv
        id="header"
        data-testid="header"
        className={clsx({ sticky: isHeaderSticky, showBoxShadow: !isMenuOpen })}
      >
        <Container fluid>
          <Row>
            <Col>
              <div className="header-wrapper">
                <Link
                  to="/"
                  className={clsx("logo-wrapper", {
                    "float-logo": !!shouldLogoFloat,
                    circle: !!isLogoRounded,
                  })}
                  data-testid="header-logo-wrapper"
                >
                  <ImageWithFallBack
                    src={logo || defaultLogo}
                    alt="sherpa kitchen logo"
                    testId="header-logo"
                  />
                </Link>
                <nav className="menu-wrapper" data-testid="header-menu-wrapper">
                  <ul>
                    {navLink.map((x, i) => {
                      if (typeof window === "undefined") return;
                      const { pathname = "" } = window?.location || "";

                      const active = pathname === x.url;
                      return (
                        <li className={clsx("menu-list", { active })} key={i}>
                          <Link to={x.url}>{x.label}</Link>
                        </li>
                      );
                    })}
                  </ul>

                  <HamburgerMenuIcon
                    isMenuOpen={isMenuOpen}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                  />
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </StyledDiv>
      <Drawer
        className="search-drawer"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        size="fullscreen"
        position="top"
        drawerZindex={9}
        overlayZindex={5}
        drawerTestId="header-drawer"
      >
        <HeaderMenu navLink={navLink} />
      </Drawer>
    </>
  );
};

export default Header;
