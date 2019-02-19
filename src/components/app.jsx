import React, { Component } from 'react';

// internal
import FlatList from './flat_list';
import GMapsReact from './gmaps_react';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: null,
      // formFocus: false
    };
  }

  // focus = () => {
  //   const { formFocus } = this.state;
  //   this.setState({ formFocus: !formFocus });
  // }

  // search = (query) => {
  //   giphy('uemh2Mpw1UsaXl78vTikOIWngrZnTfOz').search({
  //     q: query,
  //     rating: 'g',
  //     limit: 10
  //   }, (error, response) => this.setState({ gifs: response.data }));
  // }

  click = selectedFlat => this.setState({ selectedFlat });

  render() {
    const { flats, selectedFlat } = this.state;
    return (
      <div>
        <div className="left-scene">
          <FlatList flats={flats} clickFunction={this.click} />
        </div>
        <div className="right-scene">
          <GMapsReact selectedFlat={selectedFlat} focusFunction={this.focus} />
        </div>
      </div>
    );
  }
}
// <div className="selected-gif">
//   <Gif id={selectedId} clickFunction={this.click} />
// </div>

export default App;
