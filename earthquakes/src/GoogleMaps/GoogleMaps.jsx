import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'


const mapStyles = {
  width: '100%',
  height: '100vh'
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component{
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }


  render(){
    return(
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      />
    )
  }
}


export default GoogleMaps
