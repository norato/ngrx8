import { Component, OnInit } from '@angular/core';
import { EntityCollectionServiceFactory } from '@ngrx/data';
import { AppState } from './store';
import { Store, select } from '@ngrx/store';
import { LoadPhotos, getPhotos } from './store/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly entityCollectionServiceFactory: EntityCollectionServiceFactory,
    private readonly state$: Store<AppState>
  ) {
    const todo = this.entityCollectionServiceFactory.create('Todo');
    const foobar = this.entityCollectionServiceFactory.create('FooBar');
    todo.getAll();
    foobar.getAll();

    this.state$.dispatch(new LoadPhotos());
  }

  ngOnInit() {
    this.state$.pipe(select(getPhotos));
  }
}
