import React, { Component } from 'react';

// internal
import MapGL from './map_gl';
import FlatList from './flat_list';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: null
    };
  }

  click = selectedFlat => this.setState({ selectedFlat });

  render() {
    const { flats, selectedFlat } = this.state;
    return (
      <div>
        <FlatList flats={flats} clickFunction={this.click} />
        <div className="map-container">
          <MapGL selectedFlat={selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;
