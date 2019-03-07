// external
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';

// internal
import Flat from '../components/flat';

class FlatList extends Component {
  static defaultProps = {
    flats: [{
      name: "Charm at the Steps of the Sacre Coeur/Montmartre",
      imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
      price: 164,
      priceCurrency: "EUR",
      lat: 48.884211,
      lng: 2.34689
    }]
  }

  componentWillMount() {
    // dispatch an action to update the Reux State tree (flats)
  }

  render() {
    const { flats } = this.props;

    return (
      <div className="flat-list col-sm-7">
        {flats.map(flat => <Flat key={flat.name} flat={flat} />)}
      </div>
    );
  }
}
// =
// ({ flats, clickFunction, selectedFlat }) => {
//   return (
//     <div className="flat-list">
//       {flats.map(flat => <Flat key={flat.name} selectedFlat={selectedFlat} flat={flat} clickFunction={clickFunction} />) }
//     </div>
//   );
// };

export default FlatList;
