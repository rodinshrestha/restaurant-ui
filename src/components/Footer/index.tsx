import Typography from "../Typography";
import { StyledFooter } from "./style";

type Props = {
  footerText?: string;
};
const Footer = ({ footerText = "Footer Text" }: Props) => {
  return (
    <StyledFooter id="footer" data-testid="footer-wrapper">
      <Typography as="subtitle2">{footerText}</Typography>
    </StyledFooter>
  );
};

export default Footer;
