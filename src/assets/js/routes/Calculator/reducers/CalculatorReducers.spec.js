import test from 'tape';
import {reducerTest} from 'tape-redux';
 
import CalculatorReducer from './CalculatorReducers.js';
import * as CalculatorActions from '../actions/CalculatorActions.js';
 
test('CalculatorReducer with Action add', reducerTest(
    CalculatorReducer,
    {run: 0},
    CalculatorActions.add,
    {run: 1},
    'add should increment the counter property by 1'
)); 

test('CalculatorReducer with Action subtract', reducerTest(
    CalculatorReducer,
    {run: 2},
    Calculator.subtract,
    {run: 1},
    'remove should decrement the counter property by 1'
));
test('CalculatorReducer with Action multiply', reducerTest(
    CalculatorReducer,
    {run: 2},
    Calculator.multiply,
    {run: 1},
    'remove should decrement the counter property by 1'
));
test('CalculatorReducer with Action divide', reducerTest(
    CalculatorReducer,
    {run: 2},
    Calculator.divide,
    {run: 1},
    'remove should decrement the counter property by 1'
));