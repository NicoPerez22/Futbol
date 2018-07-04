import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import { Sponsor } from './sponsorObj';
import {Gasto} from '../gastosgenerales/gastosObj';

@Injectable()
export class SponsorService {

  APIUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getSponsors(): Observable<Sponsor[]> {
    const url = this.APIUrl + 'sponsors/';
    return this.http.get<any>(url)
      .pipe(
        tap(res => console.log(res)),
        map(res => res.Sponsor));
  }

  postSponsors(sponsor): Observable<Sponsor> {
    const url = this.APIUrl + 'sponsors/';
    return this.http
      .post<Sponsor>(url, sponsor)
      .pipe(map(res => res));
  }

  deleteSponsors(sponsorId: number): Observable<Sponsor> {
    const url = this.APIUrl + 'sponsors/' + sponsorId;
    return this.http.delete<Sponsor>(url)
      .pipe(
        tap(res => console.log(res)),
        map(res => res)
      );

  }
}
