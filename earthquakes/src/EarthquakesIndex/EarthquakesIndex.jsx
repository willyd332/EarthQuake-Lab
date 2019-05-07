import React, { Component } from 'react';

class EarthquakesIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      earthquakes: [],
    }
  }

  createEarthquakes(){
    
  }

  render(){
    const earthquakes = this.createEarthquakes()
    return(
      <div>
        <ul>
          {earthquakes}
        </ul>
      </div>
    )
  }
}


export default EarthquakesIndex;
