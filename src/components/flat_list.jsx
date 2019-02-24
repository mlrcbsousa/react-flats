import React from 'react';

// internal
import Flat from './flat';

const FlatList = ({ flats, clickFunction, selectedFlat }) => {
  return (
    <div className="flat-list">
      {flats.map(flat => <Flat key={flat.name} selectedFlat={selectedFlat} flat={flat} clickFunction={clickFunction} />) }
    </div>
  );
};

export default FlatList;
