// external
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// internal
import { setFlats } from '../actions';
import Flat from './flat';

class FlatList extends Component {
  componentWillMount() {
    // dispatch an action to update the Redux State tree (flats)
    this.props.setFlats();
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

// binds action to props, making it available
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats },
    dispatch
  );
}

// maps state to props, making it available
function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
