import React from "react";

import GoogleMapReact from "google-map-react";

import settings from "content/settings/settings.json";

import { StyledDiv } from "./style";

const GoogleMap = () => {
  const {
    map_latitude = "38.31875567024663",
    map_longitude = "-122.29787100727772",
    map_zoom_level = "20",
  } = settings || {};

  const defaultProps = {
    center: {
      lat: Number(map_latitude),
      lng: Number(map_longitude),
    },
    zoom: Number(map_zoom_level),
  };
  return (
    <StyledDiv>
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    </StyledDiv>
  );
};

export default GoogleMap;
