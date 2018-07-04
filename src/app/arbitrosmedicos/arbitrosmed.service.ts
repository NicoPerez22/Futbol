import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import {AyM} from './arbimedObj';

@Injectable()
export class ArbitrosmedService {

  APIUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getArbitro(): Observable<AyM[]> {
    const url = this.APIUrl + 'arbitrosmedicos/';
    return this.http.get<any>(url)
    .pipe(
        tap(res => console.log(res)),
        map(res => res.AyM));
  }
  postArbitro(arbitro): Observable<AyM> {
    const url = this.APIUrl + 'arbitrosmedicos/';
    return this.http
      .post<AyM>(url, arbitro)
      .pipe(map(res => res));
  }

  deleteArbitro(arbitroId: number): Observable<AyM> {
    const url = this.APIUrl + 'arbitrosmedicos/' + arbitroId;
    return this.http.delete<AyM>(url)
      .pipe(
        tap(res => console.log(res)),
        map(res => res)
      );

  }
}
