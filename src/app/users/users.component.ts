import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../store';
import { Store, select } from '@ngrx/store';
import { UserActions, getUsers } from '../store/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<any[]>;

  readonly userFields = ['id', 'name', 'username', 'email'];

  constructor(private readonly store$: Store<AppState>) {}

  ngOnInit() {
    this.store$.dispatch(UserActions.getAll());
    this.users$ = this.store$.pipe(select(getUsers));
  }
}
