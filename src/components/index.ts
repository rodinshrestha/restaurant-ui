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
import RawOutStory from "./OurStory";
import RawImageGallery from "./ImageGallery";
import RawContactForm from "./ContactForm";
import RawMap from "./Map";
import RawInputField from "./InputField";
import RawInputTextArea from "./InputTextArea";

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
const OurStory = withTheme(RawOutStory);
const ImageGallery = withTheme(RawImageGallery);
const ContactForm = withTheme(RawContactForm);
const Map = withTheme(RawMap);
const InputField = withTheme(RawInputField);
const InputTextArea = withTheme(RawInputTextArea);

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
  OurStory,
  ImageGallery,
  ContactForm,
  Map,
  InputField,
  InputTextArea,
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
export type { OurStoryProps } from "./OurStory";
export type { ImageGalleryProps } from "./ImageGallery";
export type { ContactFormProps } from "./ContactForm";
export type { MapProps } from "./Map";
export type { InputFieldProps } from "./InputField";
export type { InputTextAreaProps } from "./InputTextArea";
