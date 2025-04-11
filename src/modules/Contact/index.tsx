import React from "react";

import Icons from "@/components/Icons";
import emailIcon from "@/assets/images/icons/email.png";
import phoneIcon from "@/assets/images/icons/phone-call.png";
import Typography from "@/components/Typography";
import Overlay from "@/components/Overlay";
import { Row } from "@/components/Row";
import { Container } from "@/components/Container";
import { Col } from "@/components/Col";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import locationIcon from "@/assets/images/icons/location-pin.png";

import settings from "content/settings/settings.json";

import { StyledSection } from "./style";

const Contact = () => {
  const { email = "", phone_number = "", address = "" } = settings || {};

  return (
    <StyledSection>
      <div className="section-bg-wrapper">
        <Overlay zIndex={0.7} opacity={0.7} />
        <Container fluid>
          <Row>
            <Col>
              <div className="menu-title-content">
                <Typography as="h1" className="section-title">
                  Contact Us
                </Typography>
                <Typography as="h5">
                  Please use the form below to connect with us. Remember us for
                  -
                </Typography>

                <ul className="rember-us-wrapper">
                  <li>Private Parties and Events.</li>
                  <li>Catering and Delivery.</li>
                  <li>Gift Certificates.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid>
        <Row>
          <Col>
            <div className="contact-wrapper">
              <ContactForm />

              <div className="contact-info-warpper">
                <div className="contact-title">
                  <Typography as="h4">We are located at:</Typography>
                </div>

                <div className="contact-method">
                  <Icons icon={emailIcon} />
                  <div className="content-info">
                    <Typography as="subtitle1">
                      <a href={`mail:${email}`}>{email}</a>
                    </Typography>
                  </div>
                </div>
                <div className="contact-method">
                  <Icons icon={phoneIcon} />
                  <div className="content-info">
                    <Typography as="subtitle1">
                      <a href={`tel:${phone_number}`}>{phone_number}</a>
                    </Typography>
                  </div>
                </div>
                {address && (
                  <div className="contact-method">
                    <Icons icon={locationIcon} />
                    <div className="content-info">
                      <Typography as="subtitle1">{address}</Typography>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <GoogleMap />
    </StyledSection>
  );
};

export default Contact;
