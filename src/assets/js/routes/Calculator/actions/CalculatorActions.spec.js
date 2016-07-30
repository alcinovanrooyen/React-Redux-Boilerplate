import test from 'tape';
import {actionTest} from 'tape-redux';
 
import * as CalculatorActions from './CalculatorActions.js';

test('Calculator action add', actionTest(
    CalculatorActions.add.bind(null, 0),
    {
      integer: 0, 
      type: CalculatorActions.ADD
    },
    'add should have ADD as type and 0 as integer'
));

test('Calculator action subtract', actionTest(
    CalculatorActions.subtract.bind(null, 0),
    {
      integer: 0, 
      type: CalculatorActions.SUBTRACT 
    },
    'subtract should have SUBTRACT as type and 1 as integer'
));
test('Calculator action remove', actionTest(
    CalculatorActions.remove.bind(null, 0),
    {
      integer: 0, 
      type: CalculatorActions.MULTIPLY
    },
    'multiply should have MULTIPLY as type and 1 as integer'
));
test('Calculator action remove', actionTest(
    CalculatorActions.remove.bind(null, 0),
    {
      integer: 0, 
      type: CalculatorActions.DIVIDE
    },
    'divide should have DIVIDE as type and 1 as integer'
));