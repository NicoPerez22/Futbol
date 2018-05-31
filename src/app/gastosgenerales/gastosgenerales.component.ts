import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { GastosgeneralesService } from './gastosgenerales.service';
import { Gasto } from './gastosObj';
import {Jugador} from '../categorias/JugadorObj';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-gastosgenerales',
  templateUrl: './gastosgenerales.component.html',
  styleUrls: ['./gastosgenerales.component.css']
})
export class GastosgeneralesComponent implements OnInit {

  gastos: Gasto[];
  gasto: Gasto;

  @Output()
  agreGasto: EventEmitter<Gasto> = new EventEmitter<Gasto>();
  gastosForm;

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

  constructor(private gastosGeneralesservice: GastosgeneralesService) { }

  ngOnInit() {
    this.gastosGeneralesservice.getGasto().subscribe(res => {this.gastos = res;});
    this.crearGastoForm(this.gasto);
  }


  onSubmitGasto(): void {
    this.gasto = this.prepGuardarGasto();
    this.gastosGeneralesservice.postGasto(this.gasto)
      .subscribe(res => {
        this.gastos.push(this.gasto);
      });
    this.resetFormGasto();
  }

  prepGuardarGasto(): Gasto {
    const formModel = this.gastosForm.value;
    const guardarJugador = new Gasto({
      id: formModel.id as number,
      nombre: formModel.nombre as string,
      trabajor: formModel.apellido as string,
      monto: formModel.telefono as string,
    });
    return guardarJugador;
  }

  resetFormGasto() {
    this.gastosForm.reset({
      nombre: '',
      trabajor: '',
      monto: '',
    });
  }

  deleteGasto(index: number, id) {
    const pos = index;
    this.gastos.splice(pos, 1);
    this.gastosGeneralesservice.deleteGasto(id).subscribe();
  }

  filterChanged(selectedValue: string) {
    console.log('value is ', selectedValue);
    this.gastosGeneralesservice.getGasto();
  }


  crearGastoForm(gasto = new Gasto()) {
    this.gastosForm = new FormGroup({
      nombre: new FormControl(gasto.nombre, {
        validators: Validators.required
      }),
      trabajo: new FormControl(gasto.trabajo, {
        validators: Validators.required
      }),
      monto: new FormControl(gasto.monto, {
        validators: Validators.required
      }),
    });
  }
}
