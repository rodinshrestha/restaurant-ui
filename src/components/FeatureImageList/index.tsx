import { Link } from "react-router-dom";

import { defaultPalette } from "@/theme/color";

import { StyledArticle } from "./style";
import Typography from "../Typography";

type Props = {
  title: string;
  imageURL: string;
  href: string;
  className?: string;
  bgColor: keyof typeof defaultPalette;
  isLarge?: boolean;
};

const FeatureImageList = ({
  title,
  imageURL,
  href,
  className,
  bgColor,
}: Props) => {
  return (
    <StyledArticle
      style={{ backgroundImage: `url(${imageURL})` }}
      className={className}
      $bgcolor={bgColor}
    >
      <Link to={href} className="link primary">
        <header className="feature-title">
          <Typography as="h3" className="section-title">
            {title}
          </Typography>
        </header>
      </Link>
    </StyledArticle>
  );
};

export default FeatureImageList;
