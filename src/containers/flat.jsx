// external
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// internal
import { selectFlat } from '../actions';

class Flat extends Component {
  render() {
    const { flat, selectedFlat, selectFlat } = this.props;
    const {
      name, imageUrl, price, priceCurrency
    } = flat;
    const style = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
    };

    let classes = "flat card";
    if (flat === selectedFlat) { classes += " selected"; }

    return (
      <div className={classes} style={style} onClick={selectFlat(flat)}>
        <div className="card-description">
          <h2>{name}</h2>
          <p>{`${price} ${priceCurrency}`}</p>
        </div>
      </div>
    );
  }
}

// binds action to props, making it available
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat },
    dispatch
  );
}

// maps state to props, making it available
function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
