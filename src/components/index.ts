import { withTheme } from "@/hooks/withTheme";

// Components without theme provider
import RawButton from "./Button";
import RawHeader from "./Header";
import RawOpeningHours from "./OpeningHours";
import RawSectionBgImage from "./SectionBgImage";
import RawOverlay from "./Overlay";
import RawContainer from "./Container";
import RawRow from "./Row";
import RawCol from "./Col";
import RawTypography from "./Typography";
import Link from "./Link";
import RawFooter from "./Footer";

// Injecting theme provider in the components
const Button = withTheme(RawButton);
const Header = withTheme(RawHeader);
const OppeningHours = withTheme(RawOpeningHours);
const SectionBgImage = withTheme(RawSectionBgImage);
const Overlay = withTheme(RawOverlay);
const Container = withTheme(RawContainer);
const Row = withTheme(RawRow);
const Col = withTheme(RawCol);
const Typography = withTheme(RawTypography);
const Footer = withTheme(RawFooter);

export {
  Button,
  Header,
  OppeningHours,
  SectionBgImage,
  Overlay,
  Container,
  Row,
  Col,
  Typography,
  Link,
  Footer,
};

// Export types
export type { SectionBgImageProps } from "./SectionBgImage";
export type { ButtonProps } from "./Button";
export type { ColProps } from "./Col";
export type { ContainerProps } from "./Container";
export type { DrawerProps } from "./Drawer";
export type { FooterProps } from "./Footer";
export type { HamBurgerMenuIconProps } from "./HamburgerIcon";
export type { HeaderProps } from "./Header";
export type { ImageWithFallBackProps } from "./ImageWithFallBack";
export type { OppeningHoursProps } from "./OpeningHours";
export type { OverlayProps } from "./Overlay";
export type { RowProps } from "./Row";
export type { TypographyProps } from "./Typography";
export type { LinkProps } from "./Link";
