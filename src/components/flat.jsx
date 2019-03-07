import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const { flat } = this.props;

    const {
      name, imageUrl, price, priceCurrency
    } = flat;

    const style = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
    };

    // onClick={handleClick}

    return (
      <div className="card" style={style}>
        <div className="card-category">
        </div>
        <div className="card-description">
          <h2>{name}</h2>
          <p>{`${price} ${priceCurrency}`}</p>
        </div>
      </div>
    );
  }
}

// = ({ flat, clickFunction, selectedFlat }) => {
// const handleClick = () => clickFunction(flat);
// const classes = `card${selectedFlat.name === name ? ' active' : ''}`;

export default Flat;
