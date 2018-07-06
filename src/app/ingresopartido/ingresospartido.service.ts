import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {IngresoSabados} from './ingresoObj';

@Injectable()
export class IngresospartidoService {


  APIUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getIngresosS(): Observable<IngresoSabados[]> {
    const url = this.APIUrl + 'ingresopartido/';
    return this.http.get<any>(url)
      .pipe(
        tap(res => console.log(res)),
        map(res => res.IngresoSabados));
  }

  postIngresosS(ingresoS): Observable<IngresoSabados> {
    const url = this.APIUrl + 'ingresopartido/';
    return this.http
      .post<IngresoSabados>(url, ingresoS)
      .pipe(map(res => res));
  }

  deleteIngresosS(ingresoSId: number): Observable<IngresoSabados> {
    const url = this.APIUrl + 'ingresopartido/' + ingresoSId;
    return this.http.delete<IngresoSabados>(url)
      .pipe(
        tap(res => console.log(res)),
        map(res => res)
      );

  }
}
