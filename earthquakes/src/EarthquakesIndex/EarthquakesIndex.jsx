import React, {Component} from 'react';

class EarthquakesIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      earthquakes: [],
      loadingState: '',
    }
  }

  handleClick = (e) => {
    e.target.name === "all" ?
    this.getQuakes('all_month')
    :
    this.getQuakes('significant_month')
  }
  getQuakes = async (param) => {
    this.setState({
      loadingState: 'Fetching Quakes...'
    })

    const foundEarthquakes = await fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${param}.geojson`)

    this.setState({
      loadingState: 'Analyzing Destruction...'
    })

    const parsedEarthquakes = await foundEarthquakes.json()

    const earthquakesArray = parsedEarthquakes.features;
    console.log(earthquakesArray);

    const earthquakesShow = earthquakesArray.map((currQuake) => {
      return <li className="quakeItem" key={currQuake.properties.ids}>
        <h1>Magnitude: {currQuake.properties.mag}</h1>
        <h2>Location: {currQuake.properties.place}</h2>
        <h3>Lng: {currQuake.geometry.coordinates[0]}&deg; Lat: {currQuake.geometry.coordinates[1]}&deg; Depth: {currQuake.geometry.coordinates[2]}KM</h3>
      </li>
    })

    this.setState({
      earthquakes: earthquakesShow,
      loadingState: ''
    })

    this.props.findQuakes(earthquakesArray)

  }

  render() {
    return (<div>
      <button name="signinficant" onClick={this.handleClick}>View Signinficant Quakes</button>
      <button name="all" onClick={this.handleClick}>View All Quakes</button>
      <h2>{this.state.loadingState}</h2>
      <ul>{this.state.earthquakes}</ul>
    </div>)
  }
}

export default EarthquakesIndex;
