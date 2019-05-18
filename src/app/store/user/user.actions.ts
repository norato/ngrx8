import { createAction, union, props } from '@ngrx/store';
import { User } from './user.model';

const namespace = '[UserActions]';
export const UserActions = {
  getAll: createAction(`${namespace} GET ALL`),
  getAllSuccess: createAction(
    `${namespace} GET ALL SUCCESS`,
    props<{ payload: User[] }>()
  )
};

const all = union(UserActions);

export type UserActions = typeof all;
