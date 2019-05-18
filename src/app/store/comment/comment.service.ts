import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DefaultDataService,
  HttpUrlGenerator,
  DefaultDataServiceConfig
} from '@ngrx/data';
import { environment } from 'src/environments/environment';
import { Comment } from './comment.model';

const config: DefaultDataServiceConfig = {
  root: environment.baseUrl // change base url here
};

@Injectable()
export class CommentService extends DefaultDataService<Comment> {
  constructor(
    protected http: HttpClient,
    protected httpUrlGenerator: HttpUrlGenerator
  ) {
    super('Comment', http, httpUrlGenerator, config);
  }
}
