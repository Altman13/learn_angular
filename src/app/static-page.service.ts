import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaticPageService {

  constructor( private http: HttpClient) { }

  getPage(fileName: string): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get('assets/' + fileName, { headers, responseType: 'text'})
    .pipe(
      catchError((err) => Observable.throw(new Error())
    ));
  }
}
