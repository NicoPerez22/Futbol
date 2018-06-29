import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { Gasto } from './gastosObj';
import {Jugador} from '../categorias/JugadorObj';

@Injectable()
export class GastosgeneralesService {

  APIUrl = environment.API_URL;


  constructor(private http: HttpClient) { }

  getGasto(): Observable<Gasto[]> {
    const url = this.APIUrl + 'gastosgenerales/';
    return this.http
      .get<any>(url)
      .pipe(
        tap(res => console.log(res)),
        map(res => res.data));
  }

  postGasto(gasto): Observable<Gasto> {
    const url = this.APIUrl + 'gastosgenerales/';
    return this.http
      .post<Gasto>(url, gasto)
      .pipe(map(res => res));
  }

  deleteGasto(gastoId: number): Observable<Gasto> {
    const url = this.APIUrl + 'gastosgenerales/' + gastoId;
    return this.http.delete<Gasto>(url)
      .pipe(
        tap(res => console.log(res)),
        map(res => res)
      );

  }

}
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
