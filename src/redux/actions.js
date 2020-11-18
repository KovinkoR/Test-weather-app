import {
  START_WEATHER, SET_WEATHER,
} from './actionTypes';

function startWeather(payload) {
  return {
    type: START_WEATHER,
    payload,
  };
}

function weatherSaga(url) {
  return {
    type: SET_WEATHER,
    payload: {
      url,
    },
  };
}

export { startWeather, weatherSaga };
