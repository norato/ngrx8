import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<User[]> {
    const url = this.url('users');
    return this.httpClient.get<User[]>(url);
  }

  private url(path) {
    return `${environment.baseUrl}/${path}`;
  }
}
