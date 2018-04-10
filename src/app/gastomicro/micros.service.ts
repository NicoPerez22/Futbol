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

  microL: Micro;
  APIUrl = environment.API_URL;


  constructor(private http: HttpClient) { }

  getMicro(): Observable<Micro[]> {
    const url = this.APIUrl + 'gastomicro/';
    return this.http.get<any>(url)
    .pipe(
      map(res => res.data)
    );
  }
}
