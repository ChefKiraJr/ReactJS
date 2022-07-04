import { SET_TEXT } from '../actionTypes';

export function setText(input) {
  return {
    type: SET_TEXT,
    payload: input,
  };
}
