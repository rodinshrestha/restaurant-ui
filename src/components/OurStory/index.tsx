import React, { ReactNode } from "react";

import parse from "html-react-parser";

import { StyledSection } from "./style";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Typography from "../Typography";

export type OurStoryProps = {
  storyTitle?: string;
  storySubTitle?: string;
  storyDescription?: string;
  containerFluid?: boolean;
};

const OurStory = ({
  storyTitle,
  storyDescription,
  storySubTitle,
  containerFluid = false,
}: OurStoryProps) => {
  const isContentNull = !storyTitle && !storyDescription && !storySubTitle;

  const formattedStoryContent = React.useMemo(() => {
    if (!storyDescription) return "";

    return storyDescription.replace(/\n+/g, "<br>");
  }, [storyDescription]);

  if (isContentNull) {
    return <span />;
  }

  console.log({ test: parse(formattedStoryContent) }, "@@@");

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
                  {parse(formattedStoryContent) as ReactNode}
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
