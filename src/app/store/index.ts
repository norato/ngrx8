import { EntityMetadataMap, DefaultDataServiceConfig } from '@ngrx/data';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CounterReducer } from './counter';
import { UserEffects, UserReducer, UserState } from './user';

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

const entityMetadata: EntityMetadataMap = {
  Post: {},
  Comments: {}
};

export const entityConfig = {
  entityMetadata
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.baseUrl
};
