import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { TelefonosUtil } from './telefonoObj';

@Injectable()
export class TelefonoutilService {

  telUtil: TelefonosUtil;
  APIUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  gettele(): Observable<TelefonosUtil[]> {
    const url = this.APIUrl + 'telefonos/';
    return this.http.get<any>(url)
    .pipe(
      map(res => res.data)
    );
  }
}
