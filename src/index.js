/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import store from 'store';
import Routes from 'routes';

import Player from 'components/Player';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <Player />
    </Fragment>
  </Provider>
);

export default App;
