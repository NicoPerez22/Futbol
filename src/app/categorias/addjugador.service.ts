import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Jugador } from './JugadorObj';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AddjugadorService {

    result:any;
    private jugadorUrl = '/jugador';

    constructor(private http: HttpClient) { }
  
    getJugador(): Observable<Jugador[]> {
        const url = '${this.jugadorUrl}/${nombre}';
        return this.http.get<Jugador[]>(url)
    }

    updateJugador(jugador: Jugador): Observable<any> {
        return this.http.put(this.jugadorUrl, jugador, httpOptions)
    }

    addJugador(jugador: Jugador): Observable<Jugador> {
        return this.http.post<Jugador>(this.jugadorUrl, jugador, httpOptions)
      }

    
}


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
