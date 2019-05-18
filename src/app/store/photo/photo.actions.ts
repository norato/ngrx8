import { Action } from '@ngrx/store';

export enum PhotoActionTypes {
  LoadPhotos = '[Photo] Load Photos',
  LoadPhotosSuccess = '[Photo] Load Photos Success',
  LoadPhotosFailure = '[Photo] Load Photos Failure'
}

export class LoadPhotos implements Action {
  readonly type = PhotoActionTypes.LoadPhotos;
}

export class LoadPhotosSuccess implements Action {
  readonly type = PhotoActionTypes.LoadPhotosSuccess;
  constructor(public payload: any[]) {}
}

export class LoadPhotosFailure implements Action {
  readonly type = PhotoActionTypes.LoadPhotosFailure;
  constructor(public payload: { error: any }) {}
}

export type PhotoActions = LoadPhotos | LoadPhotosSuccess | LoadPhotosFailure;
