import { createReducer, on, props } from '@ngrx/store';
import { CounterActions } from './counter.actions';

const counterInitalState = 0;

export const CounterReducer = createReducer(
  counterInitalState,
  on(CounterActions.increment, state => state + 1),
  on(CounterActions.decrement, state => state - 1),
  on(CounterActions.reset, state => 0),
  on(CounterActions.addValue, (state, props) => state + props.value)
);
