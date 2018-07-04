import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { Micro } from './microObj';


@Injectable()
export class MicrosService {

  APIUrl = environment.API_URL;


  constructor(private http: HttpClient) { }

  getMicro(): Observable<Micro[]> {
    const url = this.APIUrl + 'gastosmicro/';
    return this.http.get<any>(url)
    .pipe(
      tap(res => console.log(res)),
      map(res => res.Micro));
  }

  postMicro(jugador): Observable<Micro> {
    const url = this.APIUrl + 'gastosmicro/';
    return this.http
      .post<Micro>(url, jugador)
      .pipe(map(res => res));
  }

  deleteMicro(jugadorId: number): Observable<Micro> {
    const url = this.APIUrl + 'gastosmicro/' + jugadorId;
    return this.http.delete<Micro>(url)
      .pipe(
        tap(res => console.log(res)),
        map(res => res)
      );

  }

  editMicro(jugador): Observable<Micro> {
    const url = this.APIUrl + 'gastosmicro/' + jugador.id;
    return this.http
      .put<Micro>(url, jugador)
      .pipe(map(res => res));
  }
}
