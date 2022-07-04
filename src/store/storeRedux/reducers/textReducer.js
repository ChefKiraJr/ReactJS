import { SET_TEXT } from '../actionTypes';

const initialState = {
  text: 'TABLOID',
};

function textReducer(state = initialState, action) {
  if (action.type === SET_TEXT) {
    return { ...state, text: action.payload };
  }
  return state;
}

export default textReducer;
