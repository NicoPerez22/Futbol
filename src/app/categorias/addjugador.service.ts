import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Jugador } from './JugadorObj';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';

@Injectable()
export class AddjugadorService {

    result:any;
    jugadorLocal: Jugador;
    APIUrl = environment.API_URL;

    constructor(private http: HttpClient) { }
  
    getJugador(): Observable<Jugador[]> {
        const url = this.APIUrl + 'jugador/';
        return this.http.get<any>(url)
        .pipe(
            map(res => res.data)
        );
    }

    updateJugador(jugador: Jugador): Observable<any> {
        return this.http.put(this.APIUrl, jugador, httpOptions)
    }

    addJugador(jugador: Jugador): Observable<Jugador> {
        return this.http.post<Jugador>(this.APIUrl, jugador, httpOptions)
      }

    
}


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
