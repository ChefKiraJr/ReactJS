import { SET_COUNT } from '../actionTypes';

export function setCount(input) {
  return {
    type: SET_COUNT,
    payload: input,
  };
}
