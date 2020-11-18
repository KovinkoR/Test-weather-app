import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import creareSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import weatherReducer from './reducers/weatherReducer';
import allWetherSagaReducer from './reducers/allWeather';

const sagaMiddleware = creareSagaMiddleware();
const preloadedState = window.localStorage.getItem('redux') ?? '{}';

const store = createStore(
  combineReducers({
    weather: weatherReducer,
    allWeather: allWetherSagaReducer,
  }),
  JSON.parse(preloadedState),
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  window.localStorage.setItem('redux', JSON.stringify(store.getState()));
});

export default store;
