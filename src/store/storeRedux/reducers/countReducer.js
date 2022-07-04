import { SET_COUNT, SET_TEXT } from '../actionTypes';

const initialState = {
  count: 0,
  text: 'BOTAK',
};

function countReducer(state = initialState, action) {
  if (action.type === SET_COUNT) {
    return { ...state, count: state.count + action.payload };
  } else if (action.type === SET_TEXT) {
    return { ...state, text: action.payload };
  }
  return state;
}

export default countReducer;
