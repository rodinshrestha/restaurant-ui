import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import ImageWithFallBack from "@/components/ImageWithFallBack";
import locationIcon from "@/assets/icons/location-pin.png";
import phoneIcon from "@/assets/icons/phone-call.png";

import { StyledDiv } from "./style";

type Props = {
  lunch_time: string;
  open_information: string;
  dinner_time: string;
  order_online_url: string;
  address: string;
  phone_number: string;
};

const OpeningHours = ({
  lunch_time,
  open_information,
  dinner_time,
  order_online_url,
  address,
  phone_number,
}: Props) => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="oppening-hours-wrapper" data-testid="opening-hours">
              <Typography as="h4" testId="opening-hours-text">
                Hours:
              </Typography>

              <div className="oppening-hour-info">
                {lunch_time && (
                  <Typography
                    as="subtitle1"
                    testId="opening-hours-lunch-time-text"
                  >
                    {lunch_time}
                  </Typography>
                )}
                <Typography as="subtitle1">
                  Last tables Seated at 8:00PM
                </Typography>
                {open_information && (
                  <Typography as="subtitle1" testId="opening-hour-information">
                    {open_information}
                  </Typography>
                )}
                {dinner_time && (
                  <Typography
                    as="subtitle1"
                    testId="opening-hour-dinner-time-text"
                  >
                    {dinner_time}
                  </Typography>
                )}
              </div>

              <div className="order-wrapper">
                {order_online_url && (
                  <Button
                    skin="contained"
                    href={order_online_url}
                    testId="opening-hour-order-btn"
                  >
                    ORDER ONLINE
                  </Button>
                )}
                {address && (
                  <div className="location-wrapper">
                    <ImageWithFallBack
                      src={locationIcon}
                      alt="Location icon"
                      testId="opening-hours-location-icon"
                    />
                    <a
                      href={`https://www.google.com/maps/search/${address}`}
                      target="_blank"
                      rel="noreferrer"
                      data-testid="opening-hours-location-link"
                    >
                      {address}
                    </a>
                  </div>
                )}

                {phone_number && (
                  <div className="location-wrapper">
                    <ImageWithFallBack
                      src={phoneIcon}
                      alt="Location icon"
                      testId="opening-hours-phone-icon"
                    />
                    <a
                      href={`tel:${phone_number}`}
                      data-testid="opening-hours-phone-link"
                    >
                      {phone_number}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default OpeningHours;
