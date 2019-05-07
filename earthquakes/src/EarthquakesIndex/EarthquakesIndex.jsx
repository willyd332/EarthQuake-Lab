import React, {Component} from 'react';

class EarthquakesIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      earthquakes: []
    }
  }

  componentDidMount(){
    this.getQuakes()
  }
  getQuakes = async () => {

    const foundEarthquakes = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson')

    const parsedEarthquakes = await foundEarthquakes.json()

    const earthquakesArray = parsedEarthquakes.features;
    console.log(earthquakesArray);

    const earthquakesShow = earthquakesArray.map((currQuake) => {
      return <li key={currQuake.properties.ids}>
        <h1>Magnitude: {currQuake.properties.mag}</h1>
        <h2>Location: {currQuake.properties.place}</h2>
        <h3>Lng: {currQuake.geometry.coordinates[0]}&deg; Lat: {currQuake.geometry.coordinates[1]}&deg; Depth: {currQuake.geometry.coordinates[2]}KM</h3>
      </li>
    })

    this.setState({earthquakes: earthquakesShow})

    this.props.findQuakes(earthquakesArray)

  }

  render() {
    return (<div>
      <ul>{this.state.earthquakes}</ul>
    </div>)
  }
}

export default EarthquakesIndex;
