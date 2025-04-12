import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Typography from "../Typography";
import Button from "../Button";
import ImageWithFallBack from "../ImageWithFallBack";
import locationIcon from "../../assets/icons/location-pin.png";
import phoneIcon from "../../assets/icons/phone-call.png";
import { StyledDiv } from "./style";

export type OppeningHoursProps = {
  lunchTime: string;
  openInformation: string;
  dinnerTime: string;
  orderOnlineUrl: string;
  address: string;
  phoneNumber: string;
  lastTableSeated: string;
  orderBtnLabel?: string;
  hoursTitle?: string;
};

const OpeningHours = ({
  lunchTime,
  openInformation,
  dinnerTime,
  lastTableSeated,
  orderOnlineUrl,
  address,
  phoneNumber,
  orderBtnLabel = "ORDER ONLINE",
  hoursTitle = "Hours:",
}: OppeningHoursProps) => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="oppening-hours-wrapper" data-testid="opening-hours">
              <Typography as="h4" testId="opening-hours-text">
                {hoursTitle}
              </Typography>

              <div className="oppening-hour-info">
                {lunchTime && (
                  <Typography
                    as="subtitle1"
                    testId="opening-hours-lunch-time-text"
                  >
                    {lunchTime}
                  </Typography>
                )}
                {lastTableSeated && (
                  <Typography as="subtitle1">{lastTableSeated}</Typography>
                )}
                {openInformation && (
                  <Typography as="subtitle1" testId="opening-hour-information">
                    {openInformation}
                  </Typography>
                )}
                {dinnerTime && (
                  <Typography
                    as="subtitle1"
                    testId="opening-hour-dinner-time-text"
                  >
                    {dinnerTime}
                  </Typography>
                )}
              </div>

              <div className="order-wrapper">
                {orderOnlineUrl && (
                  <Button
                    skin="contained"
                    href={orderOnlineUrl}
                    testId="opening-hour-order-btn"
                  >
                    {orderBtnLabel}
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

                {phoneNumber && (
                  <div className="location-wrapper">
                    <ImageWithFallBack
                      src={phoneIcon}
                      alt="Location icon"
                      testId="opening-hours-phone-icon"
                    />
                    <a
                      href={`tel:${phoneNumber}`}
                      data-testid="opening-hours-phone-link"
                    >
                      {phoneNumber}
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
