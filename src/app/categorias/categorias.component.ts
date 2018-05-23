import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { AddjugadorService } from './addjugador.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { Jugador } from './JugadorObj';
import { HttpClient } from '@angular/common/http/src/client';
import { Params } from '@angular/router/src/shared';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as moment from 'moment';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  jugadores: Jugador[] = new Array<Jugador>();
  jugador: Jugador;
  now = moment().format('L');

  @Output()
  agreJugador: EventEmitter<Jugador> = new EventEmitter<Jugador>();

  jugadorForm;

  constructor(private addjugadorService: AddjugadorService) {
  }

  ngOnInit() {
    this.addjugadorService.getJugador().subscribe(res => {this.jugadores = res;});
    this.crearJugadorForm(this.jugador);
  }

  onSubmitJugador(): void {
    this.jugador = this.prepGuardarJugador();
    this.addjugadorService.postJugador(this.jugador)
      .subscribe(res => {
        this.jugadores.push(this.jugador);
      });
  }


  deleteJugador(index: number, id) {
    const pos = index;
    this.jugadores.splice(pos, 1);
    this.addjugadorService.deleteJugador(id).subscribe();
  }


  prepGuardarJugador(): Jugador {
    const formModel = this.jugadorForm.value;
    const guardarJugador = new Jugador({
      id: formModel.id as number,
      nsocio: formModel.nsocio as string,
      nombre: formModel.nombre as string,
      apellido: formModel.apellido as string,
      telefono: formModel.telefono as string,
      fechapago: formModel.fechapago as string,
      observacion: formModel.observacion as string,
      planillamed: formModel.planillamed as string,
      mail: formModel.mail as string,
      pago: formModel.pago as string,
    });
    return guardarJugador;
  }



  crearJugadorForm(jugador = new Jugador()) {
    this.jugadorForm = new FormGroup({
      nsocio: new FormControl(jugador.nsocio, {
        validators: Validators.required
      }),
      nombre: new FormControl(jugador.nombre, {
        validators: Validators.required
      }),
      apellido: new FormControl(jugador.apellido, {
        validators: Validators.required
      }),
      telefono: new FormControl(jugador.telefono, {
        validators: Validators.required
      }),
      fechapago: new FormControl(jugador.fechapago, {
        validators: Validators.required
      }),
      observacion: new FormControl(jugador.observacion, {
        validators: Validators.required
      }),
      planillamed: new FormControl(jugador.planillamed, {
        validators: Validators.required
      }),
      mail: new FormControl(jugador.mail, {
        validators: Validators.required
      }),
      pago: new FormControl(jugador.pago, {
        validators: Validators.required
      }),
    });
  }


}
