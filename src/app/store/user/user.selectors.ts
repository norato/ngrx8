import { UserState } from './user.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getUserState = createFeatureSelector('user');

export const getUsers = createSelector(
  getUserState,
  (state: UserState) => state.users
);
