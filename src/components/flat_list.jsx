import React from 'react';

// internal
import Flat from './flat';

const FlatList = ({ flats, clickFunction }) => {
  return (
    <div className="flat-list">
      {flats.map(({ id }) => <Flat id={id} key={id} clickFunction={clickFunction} />) }
    </div>
  );
};

export default FlatList;
