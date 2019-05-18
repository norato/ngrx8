import { Component } from '@angular/core';
import { EntityCollectionServiceFactory } from '@ngrx/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly entityCollectionServiceFactory: EntityCollectionServiceFactory
  ) {
    const foobar = this.entityCollectionServiceFactory.create('Todo');
    foobar.getAll();
  }
}
