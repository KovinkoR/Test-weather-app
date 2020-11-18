import { all } from 'redux-saga/effects';

import weatherSaga from './weatherSaga';

export default function* () {
  yield all([
    weatherSaga(),
  ]);
}
