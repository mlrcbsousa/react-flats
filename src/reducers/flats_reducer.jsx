// flats_reducer.jsx
import { SET_FLATS } from '../actions';

// function that receives an action and the current state
export default function(state, action) { // partial state, state that the reducer is responsible for
  if (state === undefined) {
    return [];
  }

  // Handle actions
  switch (action.type) {
    case SET_FLATS:
      return action.payload;
    default:
      return state;
  }
}

// the goal is to compute and return the new state
// version of the state for which the reducer is responsible for
// always needs to return something
// when it is nothing to be concerned with, return same state
