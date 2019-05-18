import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from './user.service';
import { UserActions } from './user.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly userService: UserService
  ) {}

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getAll),
      switchMap(() =>
        this.userService.getAll().pipe(
          map((result: any[]) =>
            UserActions.getAllSuccess({ payload: result })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
