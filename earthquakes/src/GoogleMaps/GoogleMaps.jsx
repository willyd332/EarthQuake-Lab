import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'


const mapStyles = {
  width: '100%',
  height: '70vh',
};

class GoogleMaps extends Component{
  constructor(props){
    super(props)
    this.state = {
      markers: []
    }
  }

  componentDidMount(){
    this.createMarkers()
  }

  createMarkers(){
    const newMarkers = this.props.quakesLocation.map((quake) => {
      return(
        <Marker key={quake.lat} position = {{
          lat: quake.lat,
          lng: quake.lng
          
        }} />
      )
    })
    this.setState({
      markers: newMarkers,
    })
  }


  render(){
      console.log(this.state.markers)
      console.log(this.props, "<-- this.props")
    return(
      <Map
        google={this.props.google}
        zoom={2}
        style={mapStyles}
        initialCenter={{
          lat: 39.7392,
          lng: -104.9903
        }}
      >
        {this.props.quakesLocation.map((quake) => {
          return(
            <Marker key={quake.lat} position = {{
              lat: quake.lat,
              lng: quake.lng
            }} />
          )
        })}
      </Map>
    )
  }
}


export default GoogleApiWrapper({

  apiKey: 'AIzaSyBTZGOGbIX7H_71sBsvvwm2OF2HWatCvZo'

})(GoogleMaps);
