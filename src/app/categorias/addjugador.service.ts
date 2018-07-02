import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Jugador} from './JugadorObj';
import {catchError, map, tap} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';

@Injectable()
export class AddjugadorService {

  APIUrl = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  getJugador(): Observable<Jugador[]> {
    const url = this.APIUrl + 'pagosjugadores/';
    return this.http.get<any>(url)
      .pipe(
        tap(res => console.log(res)),
        map(res => {
          const jugadores = [];
          res.jugadores.forEach(jug => {
            jugadores.push(new Jugador(jug));
          });
          return jugadores;
        })
      );
  }

  updateJugador(jugador: Jugador): Observable<any> {
    const url = this.APIUrl + 'pagosjugadores/';
    return this.http.put(this.APIUrl, jugador);
  }

  postJugador(jugador): Observable<Jugador> {
    const url = this.APIUrl + 'pagosjugadores/';
    return this.http
      .post<Jugador>(url, jugador)
      .pipe(map(res => res));
  }

  deleteJugador(jugadorId: number): Observable<Jugador> {
    const url = this.APIUrl + 'pagosjugadores/' + jugadorId;
    return this.http.delete<Jugador>(url)
      .pipe(
        tap(res => console.log(res)),
        map(res => res)
      );

  }

  editJugador(jugador): Observable<Jugador> {
    const url = this.APIUrl + 'pagosjugadores/' + jugador.id;
    return this.http
      .put<Jugador>(url, jugador)
      .pipe(map(res => res));
  }

  getJugador2(jugadorID: number): Observable<Jugador> {
    const url = this.APIUrl + 'pagosjugadores/' + jugadorID;
    return this.http.get<any>(url)
      .pipe(
        tap(res => console.log(res)),
        map(res => res));
  }

}
