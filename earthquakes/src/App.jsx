import React from 'react';
import './main.css'
import EarthquakesIndex from './EarthquakesIndex/EarthquakesIndex.jsx'
import GoogleMaps from './GoogleMaps/GoogleMaps.jsx'

function App() {
  return (
    <div>
      <h1 class="title">EARTHQUAKES ON EARTH</h1>
      <div class="box">
        <EarthquakesIndex />
      </div>
      <div class="box" id="map">
        <GoogleMaps />
      </div>
    </div>
  );
}

export default App;
