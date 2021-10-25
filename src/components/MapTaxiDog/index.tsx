import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px'
}; 

const center = {
  lat: -25.0749482,
  lng: -50.1295831,
};

class MapTaxiDog extends Component {
  render() {
    return (
      
      <LoadScript
        googleMapsApiKey="AIzaSyDbq1JX-Wx8o_FpYKaDV-Xu7_t_m28VlPI"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={20}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default MapTaxiDog
