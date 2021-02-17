import { combineReducers } from 'redux';
import historyReducer from './history-reducer';
import stepNumberReducer from './step-number-reducer';
import xIsNextReducer from './xIsNext-reducer';

const rootReducer = combineReducers({
  history: historyReducer,
  stepNumber: stepNumberReducer,
  xIsNext: xIsNextReducer
});

export default rootReducer;