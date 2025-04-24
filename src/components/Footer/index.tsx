import fbIcon from "@/assets/icons/facebook.png";
import instaIcon from "@/assets/icons/instagram.png";

import Icons from "../Icons";
import Typography from "../Typography";
import { StyledFooter } from "./style";

export type FooterProps = {
  footerText?: string;
  facebookLink?: string;
  facebookIcon?: string;
  instagramLink?: string;
  instagramIcon?: string;
};
const Footer = ({
  footerText = "Footer Text",
  facebookIcon = fbIcon,
  facebookLink,
  instagramIcon = instaIcon,
  instagramLink,
}: FooterProps) => {
  const isSocialMediaLink = Boolean(facebookLink || instagramLink);
  return (
    <StyledFooter id="footer" data-testid="footer-wrapper">
      {isSocialMediaLink && (
        <div className="footer-icon-list">
          {facebookLink && (
            <a href={facebookLink} data-testid="footer-facebook-icon-id">
              <Icons icon={facebookIcon} />
            </a>
          )}
          {instagramLink && (
            <a href={instagramLink} data-testid="footer-instagram-icon-id">
              <Icons icon={instagramIcon} />
            </a>
          )}
        </div>
      )}
      <Typography as="subtitle2">{footerText}</Typography>
    </StyledFooter>
  );
};

export default Footer;
