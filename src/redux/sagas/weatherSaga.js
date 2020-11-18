import { takeEvery, put, call } from 'redux-saga/effects';

import { START_WEATHER } from '../actionTypes';

import { weatherSaga } from '../actions';

async function fetchWeather(inputValue) {
  const request = await fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=ce1fe59a97e1d3ca691fd2a7a7a2db8a&q=${inputValue}&units=metric&lang=ru`);
  const response = await request.json();
  const arrWeather = [];
  arrWeather.push(response.city);
  response.list.map((el) => {
    if (el.dt_txt.includes('12:00:00')) {
      arrWeather.push(el);
    }
    return null;
  });
  return arrWeather;
}

function* worker(action) {
  const url = yield call(fetchWeather, action.payload);
  yield put(weatherSaga(url));
}

function* watcher() {
  yield takeEvery(START_WEATHER, worker);
}

export default watcher;
