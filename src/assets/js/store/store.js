import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import CounterReducer from '../routes/Counter/reducers/CounterReducers.js';
import TodoReducer from '../routes/Todo/reducers/TodoReducers.js';
import CalculatorReducer from '../routes/Calculator/reducers/CalculatorReducer.js';

const initialState = {};
const logger = createLogger();

const Reducers = combineReducers({
  CounterReducer,
  TodoReducer,
  CalculatorReducer,
});

const Store = createStore(Reducers, initialState, applyMiddleware(logger));
export default Store;
