import Overlay from "../Overlay";
import { Container } from "../Container";
import { Row } from "../Row";
import { Col } from "../Col";
import Typography, { TagType } from "../Typography";
import { StyledDiv } from "./style";

type Props = {
  bgImage: string;
  title: string;
  description?: string;
  as?: string;
};

const SectionBgImage = ({ bgImage, title, description, as = "h1" }: Props) => {
  return (
    <StyledDiv className="section-image-wrapper" $bgImage={bgImage}>
      <Overlay />
      <Container fluid>
        <Row>
          <Col>
            <div className="menu-title-content">
              <Typography as={as as TagType} className="section-title">
                {title}
              </Typography>
              {description && <Typography as="h5">{description}</Typography>}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default SectionBgImage;
