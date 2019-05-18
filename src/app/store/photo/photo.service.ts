import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll() {
    const url = environment.baseUrl + '/photos';
    return this.httpClient.get(url);
  }
}
