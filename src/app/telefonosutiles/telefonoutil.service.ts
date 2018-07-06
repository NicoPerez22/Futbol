import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { Telefono } from './telefonoObj';

@Injectable()
export class TelefonoutilService {

  APIUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getTelefonos(): Observable<Telefono[]> {
    const url = this.APIUrl + 'telefonos/';
    return this.http.get<any>(url)
      .pipe(
        tap(res => console.log(res)),
        map(res => res.Telefono));
  }

  postTelefonos(telefono): Observable<Telefono> {
    const url = this.APIUrl + 'telefonos/';
    return this.http
      .post<Telefono>(url, telefono)
      .pipe(map(res => res));
  }

  deleteTelefonos(telefono): Observable<Telefono> {
    const url = this.APIUrl + 'telefonos/' + telefono.id;
    return this.http.delete<Telefono>(url)
      .pipe(
        tap(res => console.log(res)),
        map(res => res)
      );

  }
}
