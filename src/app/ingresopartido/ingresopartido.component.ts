import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ArbitrosmedService} from '../arbitrosmedicos/arbitrosmed.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AyM} from '../arbitrosmedicos/arbimedObj';
import {Router} from '@angular/router';
import {IngresospartidoService} from './ingresospartido.service';
import {IngresoSabados} from './ingresoObj';

@Component({
  selector: 'app-ingresopartido',
  templateUrl: './ingresopartido.component.html',
  styleUrls: ['./ingresopartido.component.css']
})
export class IngresopartidoComponent implements OnInit {

  ingresosS: IngresoSabados[] = new Array<IngresoSabados>();
  ingresoS: IngresoSabados;

  selectedFilter: string;
  public filterTypes = [
    {value: 'Enero', display: 'Enero'},
    {value: 'Febrero', display: 'Febrero'},
    {value: 'Marzo', display: 'Marzo'},
    {value: 'Abril', display: 'Abril'},
    {value: 'Mayo', display: 'Mayo'},
    {value: 'Junio', display: 'Junio'},
    {value: 'Julio', display: 'Julio'},
    {value: 'Agosto', display: 'Agosto'},
    {value: 'Septiembre', display: 'Septiembre'},
    {value: 'Octubre', display: 'Octubre'},
    {value: 'Noviembre', display: 'Noviembre'},
    {value: 'Diciembre', display: 'Diciembre'},
  ];

  public cate = [
    {value: 'Semana 1', display: 'Semana 1'},
    {value: 'Semana 2', display: 'Semana 2'},
    {value: 'Semana 3', display: 'Semana 3'},
    {value: 'Semana 4', display: 'Semana 4'},
  ];

  public liga = [
    {value: 'LISFI', display: 'LISFI'},
    {value: 'LIFIPA', display: 'LIFIPA'},
  ];

  ingresoSabadoForm;

  @Output()
  agreingresoS: EventEmitter<IngresoSabados> = new EventEmitter<IngresoSabados>();


  constructor(private router: Router, private ingresoSabadosService: IngresospartidoService) {
  }

  ngOnInit() {
    this.ingresoSabadosService.getIngresosS().subscribe(res => {this.ingresosS = res;
    });
    this.crearIngresoSabados(this.ingresoS);
  }


  onSubmitIngresoSabados(): void {
    this.ingresoS = this.prepIngresoSabados();
    this.ingresoSabadosService.postIngresosS(this.ingresoS)
      .subscribe(res => {
        this.ingresosS.push(this.ingresoS);
      });
    this.resetFormIngresoSabados();
  }

  deleteIngresoSabados(index: number, id) {
    const pos = index;
    this.ingresosS.splice(pos, 1);
    this.ingresoSabadosService.deleteIngresosS(id).subscribe();
  }

  prepIngresoSabados(): IngresoSabados {
    const formModel = this.ingresoSabadoForm.value;
    const guardarIngresoS = new IngresoSabados({
      id: formModel.id as number,
      estacionamiento: formModel.estacionamiento as string,
      entradas: formModel.entradas as string,
      buffet: formModel.buffet as string,
      taquillero: formModel.taquillero as string,
      montoArbitros: formModel.montoArbitros as string,
      montoMedicos: formModel.montoMedicos as string,
    });
    return guardarIngresoS;
  }
  editIngresoSabadosr(i, id) {
    this.router.navigate(['/gastosgenerales/modificar/', id]);
  }

  resetFormIngresoSabados() {
    this.ingresoSabadoForm.reset({
      estacionamiento: '',
      entradas: '',
      buffet: '',
      taquillero: '',
      montoArbitros: '',
      montoMedicos: '',
    });
  }


  filterChanged(selectedValue: string) {
    console.log('value is ', selectedValue);
    this.ingresoSabadosService.getIngresosS();
  }


  crearIngresoSabados(ingresoSabado = new IngresoSabados()) {
    this.ingresoSabadoForm = new FormGroup({
      estacionamiento: new FormControl(ingresoSabado.estacionamiento, {
        validators: Validators.required
      }),
      entradas: new FormControl(ingresoSabado.entradas, {
        validators: Validators.required
      }),
      buffet: new FormControl(ingresoSabado.buffet, {
        validators: Validators.required
      }),
      taquillero: new FormControl(ingresoSabado.taquillero, {
        validators: Validators.required
      }),
      montoArbitros: new FormControl(ingresoSabado.montoArbitros, {
        validators: Validators.required
      }),
      montoMedicos: new FormControl(ingresoSabado.montoMedicos, {
        validators: Validators.required
      }),
    });
  }
}
