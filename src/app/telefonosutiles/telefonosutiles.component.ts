import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Telefono} from './telefonoObj';
import { TelefonoutilService } from './telefonoutil.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Sponsor} from '../sponsor/sponsorObj';
import {SponsorService} from '../sponsor/sponsor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-telefonosutiles',
  templateUrl: './telefonosutiles.component.html',
  styleUrls: ['./telefonosutiles.component.css']
})
export class TelefonosutilesComponent implements OnInit {

  telefonos: Telefono[] = new Array<Telefono>();
  telefono: Telefono;

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

  @Output()
  agreTelefono: EventEmitter<Telefono> = new EventEmitter<Telefono>();

  telefonoForm;

  constructor(private router: Router, private telofonosService: TelefonoutilService) {
  }

  ngOnInit() {
    this.telofonosService.getTelefonos().subscribe(res => {this.telefonos = res;
    });
    this.crearTelefonoForm(this.telefono);
  }


  onSubmitTelefono(): void {
    this.telefono = this.prepGuardarTelefono();
    this.telofonosService.postTelefonos(this.telefono)
      .subscribe(res => {
        this.telefonos.push(this.telefono);
      });
    this.resetFormTelefonor();
  }

  deleteTelefono(index: number, id) {
    const pos = index;
    this.telefonos.splice(pos, 1);
    this.telofonosService.deleteTelefonos(id).subscribe();
  }

  prepGuardarTelefono(): Telefono {
    const formModel = this.telefonoForm.value;
    const guardarTel = new Telefono({
      id: formModel.id as number,
      nombre: formModel.nombre as string,
      apellido: formModel.apellido as string,
      profesion: formModel.profesion as string,
      club: formModel.club as string,
      telefono: formModel.telefono as string,
    });
    return guardarTel;
  }
  editTelefono(i, id) {
    this.router.navigate(['/gastosgenerales/modificar/', id]);
  }

  resetFormTelefonor() {
    this.telefonoForm.reset({
      nombre: '',
      apellido: '',
      profesion: '',
      club: '',
      telefono: '',
    });
  }


  filterChanged(selectedValue: string) {
    console.log('value is ', selectedValue);
    this.telofonosService.getTelefonos();
  }


  crearTelefonoForm(telefono = new Telefono()) {
    this.telefonoForm = new FormGroup({
      nombre: new FormControl(telefono.nombre, {
        validators: Validators.required
      }),
      apellido: new FormControl(telefono.apellido, {
        validators: Validators.required
      }),
      profesion: new FormControl(telefono.profesion, {
        validators: Validators.required
      }),
      club: new FormControl(telefono.club, {
        validators: Validators.required
      }),
      telefono: new FormControl(telefono.telefono, {
        validators: Validators.required
      }),
    });
  }
}
