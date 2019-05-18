import { createFeatureSelector, createSelector } from '@ngrx/store';

const getCounterState = createFeatureSelector('counter');

export const getCounter = createSelector(
  getCounterState,
  (state: number) => state
);
