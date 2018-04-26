import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AddjugadorService } from './addjugador.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { Jugador } from './JugadorObj';
import { HttpClient } from '@angular/common/http/src/client';
import { Params } from '@angular/router/src/shared';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  data: any[];
  dtOptions: any = {};
  jugadores: Jugador[] = new Array<Jugador>();
  jugador: Jugador;

  private truefalse: boolean = false;


  @Output()
  agreJugador: EventEmitter<Jugador> = new EventEmitter<Jugador>();

  jugadorForm;

   createTodo = async function(req, res, next){
    var todo = {
      nombre: req.jugador.nombre
    }
  }

  myEvent(event) {
    alert('Puto')
    console.log(event);
  }

  constructor(private addjugadorService: AddjugadorService) {
  }

  ngOnInit() {
    this.addjugadorService.getJugador()
      .subscribe(res => {
        this.jugadores = res;
      });

    this.crearJugadorForm()
  }

  onSubmitJugador() {
    this.jugadores.push(this.jugador)
    this.addjugadorService.postJugador(this.jugador)
      .subscribe(jugador => this.jugadores.push(jugador));
  }
    //evento para enviar formulario (comfirmar)
  enviar(jugador): void {
    this.crearJugadorForm(jugador);
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
