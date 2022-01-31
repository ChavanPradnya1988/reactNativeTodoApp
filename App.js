import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import ReduxThunk from 'redux-thunk';
import todos from './store/reducers/todos';
import auth from './store/reducers/auth';

import NavigationContainer from './navigation/NavigationContainer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  Todos: todos,
  auth: auth
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}
