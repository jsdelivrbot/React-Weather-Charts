import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {

    switch(action.type){
      case FETCH_WEATHER:
      //// never mutate state inside reducer:
      // return state.push(action.payload.data);

      //// always return a new instance of state
      // concat duplicates rather than mutates
      //return state.concat([action.payload.data]);

      // OR in ES6
      return [ action.payload.data, ...state];

    }

    console.log('Action received — ', action);
    return state;
}
