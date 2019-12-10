import { fromJS } from 'immutable';
// import thunkMiddleware from 'redux-thunk'
import withRedux from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';

import { NODE_ENV } from '@config';
import rootReducer from './reducers';

const bindMiddleware = middleware => {
  if (NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension'); // eslint-disable-line
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const initStore = (initialState = {}, context) => {
  const { isServer } = context;

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    bindMiddleware([])
  );
  return store;
};

export default comp => withRedux(initStore)(comp);
