import {combineReducers} from 'redux';
import app from './appReducer';
import counter from './counterReducer';

const rootReducer = combineReducers({
  app,
  counter
})

export default rootReducer;
