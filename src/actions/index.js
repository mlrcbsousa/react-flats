import flats from '../../data/flats';

// actions return a type:, payload: object
// when triggered they will go through ever reducer of the app
// many keys :: many keys in the redux state

export function setFlats() {
  // api call here usually
  return {
    type: 'SET_FLATS',
    payload: flats
  };
}

export function selectFlat(flat) {
  return {
    type: 'SELECT_FLAT',
    payload: flat
  };
}
