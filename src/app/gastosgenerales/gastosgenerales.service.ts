import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { GastosG } from './gastosObj';

@Injectable()
export class GastosgeneralesService {

  gastosL: GastosG;
  APIUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getGastos(): Observable<GastosG[]> {
    const url = this.APIUrl + 'gastosgenerales/';
    return this.http.get<any>(url)
    .pipe(
      map(res => res.data)
    );
  }
}
