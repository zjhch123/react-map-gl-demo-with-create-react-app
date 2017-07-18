import React, { Component } from 'react';
import MapGL from 'react-map-gl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapGL
          width={700}
          height={450}
          latitude={37.768}
          longitude={-122.331}
          zoom={9.017}
          mapStyle="mapbox://styles/mapbox/dark-v9" 
          mapboxApiAccessToken={"pk.eyJ1IjoiempoY2gxMjMiLCJhIjoiY2l1cDd4cWduMDAzMDJvbDhrY2Zta3NkNCJ9.3FmRDWqp0TXkgdDIWnM-vw"}
         />
      </div>
    );
  }
}

export default App;
