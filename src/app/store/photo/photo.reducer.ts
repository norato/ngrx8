import { PhotoActions, PhotoActionTypes } from './photo.actions';

export interface PhotoState {
  photos: any[];
}

export const initialState: PhotoState = {
  photos: []
};

export function PhotoReducer(
  state = initialState,
  action: PhotoActions
): PhotoState {
  switch (action.type) {
    case PhotoActionTypes.LoadPhotosSuccess:
      return {
        ...state,
        photos: action.payload
      };
    default:
      return state;
  }
}
