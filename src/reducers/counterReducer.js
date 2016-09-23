import * as types from '../actions/actionTypes';
import Immutable from 'seamless-immutable';
import initialState from './counterInitialState';

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT:
      return state.merge({
        count: state.count + 1
      });
    case types.DECREMENT:
      return state.merge({
        count: state.count - 1
      });
    default:
      return state;
  }
}
