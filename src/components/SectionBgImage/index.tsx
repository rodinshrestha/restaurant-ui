import Overlay from "../Overlay";
import { Container } from "../Container";
import { Row } from "../Row";
import { Col } from "../Col";
import Typography, { TagType } from "../Typography";
import { StyledDiv } from "./style";

export interface SectionBgImageProps {
  bgImage: string;
  title: string;
  description?: string;
  as?: string;
  enableOverlay?: boolean;
  titleColor?: string;
  descriptionColor?: string;
}

const SectionBgImage = ({
  bgImage,
  title,
  description,
  as = "h1",
  enableOverlay = true,
  titleColor,
  descriptionColor,
}: SectionBgImageProps) => {
  return (
    <StyledDiv
      className="section-image-wrapper"
      $bgImage={bgImage}
      data-testid="section-image-test-id"
      aria-label="section-background-image"
    >
      {enableOverlay && <Overlay testId="section-overlay-test-id" />}
      <Container fluid>
        <Row>
          <Col>
            <div className="menu-title-content">
              <Typography
                as={as as TagType}
                className="section-title"
                color={titleColor}
                testId="section-title-id"
              >
                {title}
              </Typography>
              {description && (
                <Typography
                  as="h5"
                  className="description-color"
                  color={descriptionColor}
                  testId="section-description-id"
                >
                  {description}
                </Typography>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default SectionBgImage;
