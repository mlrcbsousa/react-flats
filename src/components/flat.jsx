import React from 'react';

const Flat = ({ flat, clickFunction, selectedFlat }) => {
  const {
    name, imageUrl, price, priceCurrency
  } = flat;
  const handleClick = () => clickFunction(flat);
  const style = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
  };
  const classes = `card${selectedFlat.name === name ? ' active' : ''}`;

  return (
    <div className={classes} style={style} onClick={handleClick}>
      <div className="card-category">
        {`${price} ${priceCurrency}`}
      </div>
      <div className="card-description">
        <h2>{name}</h2>
      </div>
      <a className="card-link" href="#" alt="card link" />
    </div>
  );
};

export default Flat;
