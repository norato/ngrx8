import { CounterActions } from './../store/counter/counter.actions';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from '../store/counter/counter.selector';
import { AppState } from './../store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;
  constructor(private readonly store$: Store<AppState>) {}

  ngOnInit() {
    this.counter$ = this.store$.pipe(select(getCounter));
  }

  decrement() {
    this.store$.dispatch(CounterActions.decrement());
  }
  increment() {
    this.store$.dispatch(CounterActions.increment());
  }

  reset() {
    this.store$.dispatch(CounterActions.reset());
  }

  addValue(value) {
    this.store$.dispatch(CounterActions.addValue({ value: +value }));
  }
}
