import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }
  private role: string = '';

  login(credentials): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'json; charset=utf-8');
    const params = new HttpParams();
    params.append('action', 'login');
    params.append('credentials', credentials);
    return this.http.get('php/auth.php', { headers: headers, params, responseType: 'text' })
      .pipe(
        catchError((err) => Observable.throw(new Error())
        ));
  }

  logout(): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'json; charset=utf-8');
    const params = new HttpParams();
    params.append('action', 'logout');
    return this.http.get('php/auth.php', { headers: headers, params, responseType: 'text' })
      .pipe(
        catchError((err) => Observable.throw(new Error())
        ));
  }

  getRole(): Observable<string> {
    if (this.role === '') {
      const headers = new HttpHeaders().set('Content-Type', 'json; charset=utf-8');
      const params = new HttpParams();
      params.append('action', 'check');
      return this.http.get('php/auth.php', { headers: headers, params, responseType: 'text' })
        .pipe(
          catchError((err) => Observable.throw(new Error())
          ));
    } else {
      return of(this.role);
    }
  }
}
