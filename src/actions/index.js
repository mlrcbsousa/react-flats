// import flats from '../../data/flats';

// actions return a type:, payload: object
// when triggered they will go through ever reducer of the app
// many keys :: many keys in the redux state

export const SET_FLATS = 'SET_FLATS';

export function setFlats() {
  // api call here usually
  const promise = fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response => response.json());

  return {
    type: SET_FLATS,
    payload: promise // made possible only because of middleware
  };
}
// redux expects action object from action trigger functions, fetch returns a promise object
// must add custom middleware to wait for promise resolve REDUX-PROMISE

export function selectFlat(flat) {
  return {
    type: 'SELECT_FLAT',
    payload: flat
  };
}


// Middleware: function that takes an ACTION and does something before it reaches
// the reducer, eg. let pass, log, manipulate, etc
