import { User } from './user';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import 'rxjs/add/map';
// import 'rxjs/add/catchError';
// import 'rxjs/add/Observable/of';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const headers = new HttpHeaders().set('Content-Type', 'json; charset=utf-8');
    return this.http.get<User[]>('./php/users_get.php', { headers, responseType: 'json' });
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>('./php/users_get.php', { params: { id: id } });
  }

  setUser(user: User): any {
    const headers = new HttpHeaders().set('Content-Type', 'json; charset=utf-8');
    const data = JSON.stringify(user);
    return this.http.post('./php/user_set', data, { headers, responseType: 'json' })
      .pipe(
        catchError((err) => Observable.throw(new Error())
        ));
  }

  deleteUser(id: number): any {
    const headers = new HttpHeaders().set('Content-Type', 'json; charset=utf-8');
    const data = JSON.stringify({ id: id, mode: 'delete' });
    return this.http.post('users.json', data, { headers, responseType: 'json' })
      .pipe(
        catchError((err) => Observable.throw(new Error())
        ));
  }
}
