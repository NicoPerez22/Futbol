import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { Sponsor } from './sponsorObj';

@Injectable()
export class SponsorService {

  result:any;
  sponsors: Sponsor;
  APIUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getJugador(): Observable<Sponsor[]> {
      const url = this.APIUrl + 'sponsors/';
      return this.http.get<any>(url)
      .pipe(
          map(res => res.data)
      );
  }
}
