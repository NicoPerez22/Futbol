import {Component, Input, OnInit} from '@angular/core';
import {AddjugadorService} from '../categorias/addjugador.service';
import {Jugador} from '../categorias/JugadorObj';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detalle-jugador',
  templateUrl: './detalle-jugador.component.html',
  styleUrls: ['./detalle-jugador.component.css']
})
export class DetalleJugadorComponent implements OnInit {

  jugadores: Jugador[] = new Array<Jugador>();
  jugador;

  constructor(private jugadorService: AddjugadorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.jugadorService.getJugador2(params.id).subscribe(
        (jugador: Jugador) => {
          this.jugador = new Jugador(jugador);
          console.log(this.jugador);
    }));
  }
  editJugador(i, id) {
    this.router.navigate(['/pagosjugadores/modificar/', id]);
  }
}
