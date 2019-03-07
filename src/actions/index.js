import flats from '../../data/flats';

// actions return a type:, payload: object

export function setFlats() {
  // api call here usually
  return {
    type: 'SET_FLATS',
    payload: flats
  };
}
