import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ArbitrosmedService } from './arbitrosmed.service';
import {Gasto} from '../gastosgenerales/gastosObj';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {GastosgeneralesService} from '../gastosgenerales/gastosgenerales.service';
import {AyM} from './arbimedObj';

@Component({
  selector: 'app-arbitrosmedicos',
  templateUrl: './arbitrosmedicos.component.html',
  styleUrls: ['./arbitrosmedicos.component.css']
})
export class ArbitrosmedicosComponent implements OnInit {

  arbitros: AyM[] = new Array<AyM>();
  arbitro: AyM;

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

  arbitroForm;

  @Output()
  agreArbitro: EventEmitter<AyM> = new EventEmitter<AyM>();


  constructor(private router: Router, private arbitrosMedicosService: ArbitrosmedService) {
  }

  ngOnInit() {
    this.arbitrosMedicosService.getArbitro().subscribe(res => {this.arbitros = res;
    });
    this.crearArbitroForm(this.arbitro);
  }


  onSubmitArbitro(): void {
    this.arbitro = this.prepGuardarArbitro();
    this.arbitrosMedicosService.postArbitro(this.arbitro)
      .subscribe(res => {
        this.arbitros.push(this.arbitro);
      });
    this.resetFormArbitro();
  }

  deleteArbitro(index: number, id) {
    const pos = index;
    this.arbitros.splice(pos, 1);
    this.arbitrosMedicosService.deleteArbitro(id).subscribe();
  }

  prepGuardarArbitro(): AyM {
    const formModel = this.arbitroForm.value;
    const guardarArbitro = new AyM({
      id: formModel.id as number,
      nombre: formModel.nombre as string,
      apellido: formModel.apellido as string,
      mail: formModel.mail as string,
      monto: formModel.monto as string,
      fechanacimiento: formModel.fechanacimiento as string,
      montoA: formModel.montoA as string,
      montoM: formModel.montoM as string,
    });
    return guardarArbitro;
  }
  editJugador(i, id) {
    this.router.navigate(['/gastosgenerales/modificar/', id]);
  }

  resetFormArbitro() {
    this.arbitroForm.reset({
      nombre: '',
      apellido: '',
      mail: '',
      fechanacimiento: '',
      montoA: '',
      montoM: '',
    });
  }


  filterChanged(selectedValue: string) {
    console.log('value is ', selectedValue);
    this.arbitrosMedicosService.getArbitro();
  }


  crearArbitroForm(arbitro = new AyM()) {
    this.arbitroForm = new FormGroup({
      nombre: new FormControl(arbitro.nombre, {
        validators: Validators.required
      }),
      apellido: new FormControl(arbitro.apellido, {
        validators: Validators.required
      }),
      mail: new FormControl(arbitro.mail, {
        validators: Validators.required
      }),
      fechanacimiento: new FormControl(arbitro.fechanacimiento, {
        validators: Validators.required
      }),
      montoA: new FormControl(arbitro.montoA, {
        validators: Validators.required
      }),
      montoM: new FormControl(arbitro.montoM, {
        validators: Validators.required
      }),
    });
  }
}
