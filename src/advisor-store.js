
import { createStore } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import nextConnectRedux from 'next-connect-redux';

import advisorReducer from './reducers/advisor';

export const initStore = initialState => createStore(advisorReducer, initialState);

export const nextConnect = nextConnectRedux(initStore);
