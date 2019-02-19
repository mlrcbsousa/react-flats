import React from 'react';

const Flat = ({ id, clickFunction }) => {
  const handleClick = event => clickFunction(event.target.src.split('/')[4]);
  if (!id) { return null; }
  return (
    <img src={link} alt="" className="flat" onClick={handleClick} />
  );
};

export default Flat;
