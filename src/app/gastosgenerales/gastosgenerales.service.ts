import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { Gastos } from './gastosObj';
import {Jugador} from '../categorias/JugadorObj';

@Injectable()
export class GastosgeneralesService {

  gastosL: Gastos;
  APIUrl = environment.API_URL;
  gastos: Gastos[] = new Array<Gastos>();
  gasto: Gastos;

  constructor(private http: HttpClient) { }

  getGastos(): Observable<Gastos[]> {
    const url = this.APIUrl + 'gastosgenerales/';
    return this.http.get<any>(url)
    .pipe(
      map(res => res.gastos)
    );
  }

  postGastos(gasto): Observable<Gastos> {
    const url = this.APIUrl + 'pagosjugadores/';
    return this.http
      .post<Gastos>(url, gasto)
      .pipe(
        tap(res => console.log(res)),
        map(res => res));
  }
}
