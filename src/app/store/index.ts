import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CounterReducer } from './counter';
import { UserState, UserReducer, UserEffects } from './user';

export interface AppState {
  counter: number;
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: CounterReducer,
  user: UserReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const effects = [UserEffects];
