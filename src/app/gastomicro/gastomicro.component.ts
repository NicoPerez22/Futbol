import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Micro } from './microObj';
import { MicrosService } from './micros.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddjugadorService} from '../categorias/addjugador.service';
import {Jugador} from '../categorias/JugadorObj';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gastomicro',
  templateUrl: './gastomicro.component.html',
  styleUrls: ['./gastomicro.component.css']
})
export class GastomicroComponent implements OnInit {

  micros: Micro[] = new Array<Micro>();
  micro: Micro;

  microForm;

  @Output()
  agreMicro: EventEmitter<Micro> = new EventEmitter<Micro>();

  constructor(private router: Router, private microsService: MicrosService) {
  }

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

  ngOnInit() {
    this.microsService.getMicro().subscribe(res => {
      this.micros = res;
    });
    this.crearMicroForm(this.micro);
  }

  onSubmitMicro(): void {
    this.micro = this.prepGuardarJugador();
    this.microsService.postMicro(this.micro)
      .subscribe(res => {
        this.micros.push(this.micro);
      });
    this.resetFormMicro();
  }


  deleteMicro(index: number, id) {
    const pos = index;
    this.micros.splice(pos, 1);
    this.microsService.deleteMicro(id).subscribe();
  }

  editMicro(i, id) {
    this.router.navigate(['/pagosjugadores/modificar/', id]);
  }

  detalleMicro(i, id) {
    this.router.navigate(['/pagosjugadores/detallejugador/', id]);
  }

  prepGuardarJugador(): Micro {
    const formModel = this.microForm.value;
    const guardarMicro = new Micro({
      id: formModel.id as number,
      destino: formModel.destino as string,
      monto: formModel.monto as string,
      empresa: formModel.empresa as string,
      nmicro: formModel.nmicro as string,
    });
    return guardarMicro;
  }

  resetFormMicro() {
    this.microForm.reset({
      destino: '',
      monto: '',
      empresa: '',
      nmicro: '',
    });
  }

  filterChanged(selectedValue: string) {
    console.log('value is ', selectedValue);
    this.microsService.getMicro();
  }


  crearMicroForm(micro = new Micro()) {
    this.microForm = new FormGroup({
      destino: new FormControl(micro.destino, {
        validators: Validators.required
      }),
      monto: new FormControl(micro.monto, {
        validators: Validators.required
      }),
      empresa: new FormControl(micro.empresa, {
        validators: Validators.required
      }),
      nmicro: new FormControl(micro.nmicro, {
        validators: Validators.required
      }),
    });
  }
}
