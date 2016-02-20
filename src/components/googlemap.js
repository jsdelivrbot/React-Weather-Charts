import React from 'react';
import { GoogleMapLoader, GoogleMap } from "react-google-maps";

export default (props) => {
  return (
    <GoogleMapLoader
      containerElement={ <div style={{ height: '150px', width: '200px', margin: '0 auto' }} /> }
      googleMapElement={
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{lat: props.lat, lng: props.lon }} />
      }
    />
  );
};
