import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import store from '../../redux/store';

import InputPage from '../InputPage';
import HistoryPage from '../HistoryPage';
import Navigation from '../Navigation';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/history" exact>
            <HistoryPage />
          </Route>
          <Route path="/" exact>
            <InputPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
