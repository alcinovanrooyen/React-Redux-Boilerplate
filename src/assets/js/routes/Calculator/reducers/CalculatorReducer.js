import { combineReducers } from 'redux';

import {
  ADD,
  SUBTRACT, 
  MULTIPLY,
  DIVIDE,
  CLEAR } from '../actions/CalculatorActions.js';

let answer = 0;

function run(state = 0, action) {

  let num_1 = parseInt(jQuery('#num_1').val());
  let num_2 = parseInt(jQuery('#num_2').val());

  switch (action.type) {
    case ADD:
       answer = num_1 + num_2;
       return answer;
    case SUBTRACT:
       answer = num_1 - num_2;
       return answer;
    case MULTIPLY:
       answer = num_1 * num_2;
       return answer;
    case DIVIDE:
       answer = num_1 / num_2;
       return answer;
    case CLEAR:
      jQuery('#num_1').val('');
      jQuery('#num_2').val('');
      return 0;
    default:
       return state;
  }
}

const CalculatorReducer = combineReducers({
  run,
});

export default CalculatorReducer;
