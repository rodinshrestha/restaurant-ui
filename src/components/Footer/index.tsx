import Typography from "../Typography";
import { StyledFooter } from "./style";

export type FooterProps = {
  footerText?: string;
};
const Footer = ({ footerText = "Footer Text" }: FooterProps) => {
  return (
    <StyledFooter id="footer" data-testid="footer-wrapper">
      <Typography as="subtitle2">{footerText}</Typography>
    </StyledFooter>
  );
};

export default Footer;
