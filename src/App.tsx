import React from "react";

import Header from "@/components/Header";

import SectionBgImage from "./components/SectionBgImage";
import OurStory from "./components/OurStory";

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
    url: "#",
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
        bgImage=""
        title="Section Bg Image Title"
        description="Section Bg Image description"
      />
      <OurStory
        storyDescription="Story Description"
        storySubTitle="<Story Subtitle>"
        storyTitle="<Story Titile>"
      />
    </>
  );
};

export default App;
