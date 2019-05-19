import { EntityMetadataMap, DefaultDataServiceConfig } from '@ngrx/data';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CounterReducer } from './counter';
import { UserEffects, UserReducer, UserState } from './user';
import { PhotoState, PhotoReducer } from './photo/photo.reducer';
import { PhotoEffects } from './photo/photo.effects';

export interface AppState {
  counter: number;
  user: UserState;
  photo: PhotoState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: CounterReducer,
  user: UserReducer,
  photo: PhotoReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const effects = [UserEffects, PhotoEffects];

export const entityMetadata: EntityMetadataMap = {
  Post: {},
  Comment: {},
  Todo: {},
  FooBar: {}
};

export const entityConfig = {
  entityMetadata
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.baseUrl,
  entityHttpResourceUrls: {
    FooBar: {
      entityResourceUrl: environment.baseUrl + '/comments',
      collectionResourceUrl: environment.baseUrl + '/comments'
    }
  }
};
