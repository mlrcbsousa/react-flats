import React from 'react';

// internal
import Flat from './flat';

const FlatList = ({ flats, clickFunction }) => {
  return (
    <div className="flat-list">
      {flats.map(flat => <Flat key={flat.imageUrl.split('.')[-2]} flat={flat} clickFunction={clickFunction} />) }
    </div>
  );
};

export default FlatList;
