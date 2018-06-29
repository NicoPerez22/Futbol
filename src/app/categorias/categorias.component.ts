import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { AddjugadorService } from './addjugador.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Jugador } from './JugadorObj';
import * as moment from 'moment';
import {Router, RouterEvent, Routes} from '@angular/router';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  jugadores: Jugador[] = new Array<Jugador>();
  jugador: Jugador;
  now = moment().format('L');


  selectedFilter: string;
  public filterTypes = [
    {value:'Enero', display:'Enero'},
    {value:'Febrero', display:'Febrero'},
    {value:'Marzo', display:'Marzo'},
    {value:'Abril', display:'Abril'},
    {value:'Mayo', display:'Mayo'},
    {value:'Junio', display:'Junio'},
    {value:'Julio', display:'Julio'},
    {value:'Agosto', display:'Agosto'},
    {value:'Septiembre', display:'Septiembre'},
    {value:'Octubre', display:'Octubre'},
    {value:'Noviembre', display:'Noviembre'},
    {value:'Diciembre', display:'Diciembre'},
  ];

  public cate = [
    {value:'Categoria 2000', display:'Categoria 2000'},
    {value:'Categoria', display:'Categoria'},
    {value:'Categoria', display:'Categoria'},
    {value:'Categoria', display:'Categoria'},
  ]

  @Output()
  agreJugador: EventEmitter<Jugador> = new EventEmitter<Jugador>();

  jugadorForm;

  constructor(private router: Router, private addjugadorService: AddjugadorService) {
  }

  ngOnInit() {
    this.addjugadorService.getJugador().subscribe(res => {this.jugadores = res; });
    this.crearJugadorForm(this.jugador);
  }

  onSubmitJugador(): void {
    this.jugador = this.prepGuardarJugador();
    this.addjugadorService.postJugador(this.jugador)
      .subscribe(res => {
        this.jugadores.push(this.jugador);
      });
    this.resetFormJugador();
    // this.addjugadorService.editJugador(this.jugador).subscribe(
    //   res => this.router.navigate(['/']),
    //   err => alert('Algo salio mal. ' +
    //     'El formulario no puede guardarse en este momento. ' +
    //     'Si lo desea puede dejar esta pestaña del navegador web abierta para no perder los cambios e intentar guardar mas tarde.')
    // );
  }


  deleteJugador(index: number, id) {
    const pos = index;
    this.jugadores.splice(pos, 1);
    this.addjugadorService.deleteJugador(id).subscribe();
  }

  //editJugador(j) {
  //  this.router.navigate(['/pagosjugadores/modificar/' + j.id]);
  //}

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

  resetFormJugador() {
    this.jugadorForm.reset({
      nsocio: '',
      telefono: '',
      apellido: '',
      nombre: '',
      fechapago: '',
      observacion: '',
      planillamed: '',
      mail: '',
      pago: ''
    });
  }

  filterChanged(selectedValue: string) {
    console.log('value is ', selectedValue);
    this.addjugadorService.getJugador();
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
