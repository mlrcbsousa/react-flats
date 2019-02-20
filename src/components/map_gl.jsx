// external
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

// internal

class MapGL extends Component {
  loadMap = () => {
    const { lng, lat } = this.props.selectedFlat;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
    });
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
  }

  componentDidMount() { this.loadMap(); }

  componentDidUpdate() { this.loadMap(); }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

export default MapGL;
