// flats_reducer.jsx
// function that receives an action and the current state
export default function(state, action) { // partial state, state that the reducer is responsible for
  if (state === undefined) {
    return [];
  }

  // Handle actions
  switch (action.type) {
    case 'SET_FLATS':
      return action.payload;
    default:
      return state;
  }
}


//  the goal is to compute and return the new state
