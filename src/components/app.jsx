// external
import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// internal
import FlatList from '../containers/flat_list';
import Map from '../containers/map';
// import flats from '../../data/flats';
// import Marker from './marker';


class App extends Component {
  // static defaultProps = {
  //   center: {
  //     lat: 59.95,
  //     lng: 30.33
  //   },
  //   zoom: 11
  // };

  // constructor(props) {
  //   super(props);
  //   this.props = props;
  //   this.state = {
  //     flats,
  //     selectedFlat: {}
  //   };
  // }

  // click = selectedFlat => this.setState({ selectedFlat });

  render() {
    // const { flats, selectedFlat } = this.state;
    // const { lat, lng } = selectedFlat;
    // const { center, zoom } = this.props;
    return (
      <div className="row">
        <FlatList />
        <Map />
      </div>
    );
  }
}

// flats={flats} selectedFlat={selectedFlat} clickFunction={this.click}
// Important! Always set the container height explicitly
// <div className="map-container">
// </div>
// <GoogleMapReact
//   bootstrapURLKeys={{ key: 'bigyolo' }}
//   defaultCenter={center}
//   defaultZoom={zoom}
// >
//   <Marker lat={lat} lng={lng} />
// </GoogleMapReact>

export default App;
