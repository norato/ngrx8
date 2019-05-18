import { createAction, union, props } from '@ngrx/store';

const namespace = '[Counter Actions]';

export const CounterActions = {
  increment: createAction(`${namespace} Increment`),
  decrement: createAction(`${namespace} Decrement`),
  reset: createAction(`${namespace} Reset`),
  addValue: createAction(`${namespace} addValue`, props<{ value: number }>())
};

const all = union(CounterActions);

export type CounterActions = typeof all;
