/*
 * action types
 */

export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';
export const CLEAR = 'CLEAR';

/*
 * action creators
 */

export function add(integer) {
  return { type: ADD, integer };
}

export function subtract(integer) {
  return { type: SUBTRACT, integer };
}

export function multiply(integer) {
  return { type: MULTIPLY, integer };
}

export function divide(integer) {
  return { type: DIVIDE, integer };
}

export function clear(integer) {
  return { type: CLEAR, integer };
}
