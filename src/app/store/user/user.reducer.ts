import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { User } from './user.model';

export interface UserState {
  users: User[];
}

export const initialUserState: UserState = {
  users: []
};

export const UserReducer = createReducer(
  initialUserState,
  on(UserActions.getAllSuccess, (state, action) => ({
    ...state,
    users: action.payload
  }))
);
