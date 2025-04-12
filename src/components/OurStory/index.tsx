import React, { ReactNode } from "react";

import ReactHtmlParser from "react-html-parser";

import { StyledSection } from "./style";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Typography from "../Typography";

type OurStoryProps = {
  storyTitle?: string;
  storySubTitle?: string;
  storyDescription?: string;
  containerFluid?: boolean;
};

const OurStory = ({
  storyTitle,
  storyDescription,
  storySubTitle,
  containerFluid = true,
}: OurStoryProps) => {
  const isContentNull = !storyTitle && !storyDescription && !storySubTitle;

  const formattedStoryContent = React.useMemo(() => {
    if (!storyDescription || isContentNull) return "";

    return storyDescription.replace(/\n+/g, "<br>");
  }, [storyDescription, isContentNull]);

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
                {storyTitle && (
                  <Typography
                    as="h2"
                    className="section-title"
                    testId="our-story-title-id"
                  >
                    {storyTitle}
                  </Typography>
                )}
                {storySubTitle && (
                  <Typography
                    as="h6"
                    className="section-title-helper"
                    testId="our-story-sub-title-id"
                  >
                    {storySubTitle}
                  </Typography>
                )}
              </div>

              {formattedStoryContent && (
                <Typography as="p" testId="our-story-description">
                  {ReactHtmlParser(formattedStoryContent) as ReactNode}
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
