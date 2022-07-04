import { combineReducers, createStore } from 'redux';
import countReducer from './reducers/countReducer';
import textReducer from './reducers/textReducer';

const reducer = combineReducers({
  countReducer: countReducer,
  textReducer: textReducer,
});

const store = createStore(reducer);

export default store;
