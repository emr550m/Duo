import { combineReducers } from 'redux';
import { createStore } from 'redux';

import login from '../reducers/login';
import testReducer from '../reducers/test';

var reducersCombined = combineReducers({
    login,
    test: testReducer
  });

  export default store = createStore(reducersCombined);