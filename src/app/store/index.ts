import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CounterReducer } from './counter/counter.reducer';

export interface AppState {
  counter: number;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: CounterReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
