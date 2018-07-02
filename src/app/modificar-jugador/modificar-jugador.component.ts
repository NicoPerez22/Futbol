
import {Jugador} from '../categorias/JugadorObj';
import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AddjugadorService} from '../categorias/addjugador.service';

@Component({
  selector: 'app-modificar-jugador',
  templateUrl: './modificar-jugador.component.html',
  styleUrls: ['./modificar-jugador.component.css']
})
export class ModificarJugadorComponent implements OnInit {

  jugador: Jugador;

  constructor(private jugadorService: AddjugadorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const idJugador = +this.route.snapshot.paramMap.get('_id');
    this.jugadorService.getJugador2(idJugador)
      .subscribe(jugador => this.jugador = jugador);
  }

  onSubmitCedula(jugador) {
    this.jugadorService.editJugador(jugador).subscribe(
      res => this.router.navigate(['/']),
      err => alert('Algo salio mal. ' +
        'El formulario no puede guardarse en este momento. ' +
        'Si lo desea puede dejar esta pestaña del navegador web abierta para no perder los cambios e intentar guardar mas tarde.')
    );
  }
}
