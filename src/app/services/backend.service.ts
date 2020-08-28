import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  readonly url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/users/1/posts`, {
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`, {
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    });
  }
}
