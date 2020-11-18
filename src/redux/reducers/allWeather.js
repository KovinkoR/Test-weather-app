import { SET_WEATHER } from '../actionTypes';

const initialState = {
  inputList: [],
};

export default function allWetherSagaReducer(state = initialState, {
  type,
  payload,
}) {
  switch (type) {
    case SET_WEATHER:
      return {
        ...state,
        inputList: [...state.inputList, payload.url],
      };
    default:
      return state;
  }
}
