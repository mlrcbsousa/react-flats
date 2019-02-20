// external
import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

// internal
import '../assets/stylesheets/application.scss';
import App from './components/app';

// configurations
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

// load App
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
