import clsx from "clsx";

import fbIcon from "@/assets/icons/facebook.png";
import instaIcon from "@/assets/icons/instagram.png";
import defaultYelpIcon from "@/assets/icons/yelp-brands-solid.svg";

import Icons from "../Icons";
import Typography from "../Typography";
import { StyledFooter } from "./style";

export type FooterProps = {
  footerText?: string;
  facebookLink?: string;
  facebookIcon?: string;
  instagramLink?: string;
  instagramIcon?: string;
  iconBgColor?: string;
  iconRadius?: boolean;
  yelpLink?: string;
  yelpIcon?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
};
const Footer = ({
  footerText = "Footer Text",
  facebookIcon = fbIcon,
  facebookLink,
  instagramIcon = instaIcon,
  instagramLink,
  yelpLink,
  yelpIcon = defaultYelpIcon,
  iconBgColor,
  iconRadius = false,
  bgColor,
  textColor,
  className,
}: FooterProps) => {
  const isSocialMediaLink = Boolean(facebookLink || instagramLink);
  const updatedFooterText = footerText.replace(
    /%date%/g,
    new Date().getFullYear().toString(),
  );
  return (
    <StyledFooter
      id="footer"
      data-testid="footer-wrapper"
      $iconBgColor={iconBgColor}
      $bgColor={bgColor}
      className={className}
    >
      {isSocialMediaLink && (
        <div className="footer-icon-list">
          {facebookLink && (
            <a
              href={facebookLink}
              data-testid="footer-facebook-icon-id"
              className={clsx("footer-icon", { "icon-radius": !!iconRadius })}
            >
              <Icons icon={facebookIcon} />
            </a>
          )}
          {instagramLink && (
            <a
              href={instagramLink}
              data-testid="footer-instagram-icon-id"
              className={clsx("footer-icon", { "icon-radius": !!iconRadius })}
            >
              <Icons icon={instagramIcon} />
            </a>
          )}
          {yelpLink && (
            <a
              href={yelpLink}
              data-testid="footer-instagram-icon-id"
              className={clsx("footer-icon", { "icon-radius": !!iconRadius })}
            >
              <Icons icon={yelpIcon} />
            </a>
          )}
        </div>
      )}
      <Typography as="subtitle2" color={textColor}>
        {updatedFooterText}
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
