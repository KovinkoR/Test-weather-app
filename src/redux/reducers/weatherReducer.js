import { SET_WEATHER } from '../actionTypes';

const initialState = '';

export default function wetherSagaReducer(state = initialState, {
  type,
  payload,
}) {
  switch (type) {
    case SET_WEATHER:
      return {
        ...state,
        weather: payload.url,
      };
    default:
      return state;
  }
}
