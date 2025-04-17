import React from "react";

import Header from "@/components/Header";

import SectionBgImage from "./components/SectionBgImage";
import OurStory from "./components/OurStory";
import OpeningHours from "./components/OpeningHours";
import { Footer } from "./components";

const navLink = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Menu",
    url: "/menu",
  },
  {
    label: "Gallery",
    url: "/gallery",
  },
  {
    label: "Order Online",
    url: "/order-online",
  },

  {
    label: "Contact Us",
    url: "/contact-us",
  },
];

const App: React.FC = () => {
  return (
    <>
      <Header
        navLink={navLink}
        navActiveColor="rgb(14, 168, 96)"
        navHoverColor="rgb(14, 168, 96)"
      />
      <SectionBgImage
        title="SectionBgImage Component"
        description="Section Bg Image description"
      />
      <OurStory
        storyDescription="Story Description"
        storySubTitle="Story Subtitle"
        storyTitle="OurStory Component"
      />

      <OpeningHours
        hoursTitle="OpeningHours Component"
        address="Address test"
        dinnerTime="Dinner Time"
        lastTableSeated="Last table seated"
        lunchTime="Lunch time"
        openInformation="Open Information"
        orderOnlineUrl="#"
        phoneNumber="Phone Number"
      />

      <Footer footerText="FooterComponent" />
    </>
  );
};

export default App;
