import { StyledSection } from "./style";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Typography from "../Typography";

export type OurStoryProps = {
  title?: string;
  subTitle?: string;
  description?: string;
  containerFluid?: boolean;
  titleColor?: string;
  subTitleColor?: string;
  descriptionColor?: string;
};

const OurStory = ({
  title,
  subTitle,
  description,
  containerFluid = false,
  titleColor,
  descriptionColor,
  subTitleColor,
}: OurStoryProps) => {
  const isContentNull = !description && !subTitle && !subTitle;

  if (isContentNull) {
    return <span />;
  }

  return (
    <StyledSection data-testid="our-story-section-id">
      <Container fluid={containerFluid}>
        <Row>
          <Col>
            <div
              className="our-story-wrapper"
              data-testid="our-story-wrapper-id"
            >
              <div className="our-story-title">
                {title && (
                  <Typography
                    as="h2"
                    className="ourstory-title"
                    testId="our-story-title-id"
                    color={titleColor}
                  >
                    {title}
                  </Typography>
                )}
                {subTitle && (
                  <Typography
                    as="h6"
                    className="section-title-helper"
                    testId="our-story-sub-title-id"
                    color={subTitleColor}
                  >
                    {subTitle}
                  </Typography>
                )}
              </div>

              {description && (
                <Typography
                  as="p"
                  testId="our-story-description"
                  color={descriptionColor}
                >
                  {description}
                </Typography>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default OurStory;
