import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { Arbitro, Medico } from './arbimedObj';

@Injectable()
export class ArbitrosmedService {

  arbitroL: Arbitro;
  medicoL: Medico;
  APIUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getArbitro(): Observable<Arbitro[]> {
    const url = this.APIUrl + 'arbitrosmedicos/';
    return this.http.get<any>(url)
    .pipe(
        map(res => res.data)
    );
  }

  getMedico(): Observable<Medico[]> {
    const url = this.APIUrl + 'arbitrosmedicos/';
    return this.http.get<any>(url)
    .pipe(
        map(res => res.data)
    );
  }
}
