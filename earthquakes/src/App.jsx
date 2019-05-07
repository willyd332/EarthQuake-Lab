import React from 'react';
import './main.css'
import EarthquakesIndex from './EarthquakesIndex/EarthquakesIndex.jsx'
import GoogleMaps from './GoogleMaps/GoogleMaps.jsx'
import { useState } from 'react'

function App() {

  const [quakes, setQuakes] = useState([]);
  const [magQuakes, setMagQuakes] = useState([]);

  const findQuakes = (earthquakes) => {
    const locationArray = earthquakes.map((quake) => {
      const location = {
        lng:quake.geometry.coordinates[0],
        lat:quake.geometry.coordinates[1],
      }
      return location
    })
    const magArray = earthquakes.map((magQuake) => {
      const magnitude = {
        mag: magQuake.properties.mag
      }
      return magnitude
    })
    setQuakes(locationArray)
    setMagQuakes(magArray)
  }
  
  console.log(magQuakes, "this is magQuakes");
  return (
    <div>
      <h1 className="title">EARTHQUAKES ON EARTH</h1>
      <div className="box">
        <EarthquakesIndex findQuakes={findQuakes} />
      </div>
      <div className="box" id="map">
        <GoogleMaps mag={magQuakes} quakesLocation={quakes} />
      </div>
    </div>
  );
}

export default App;
