import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { TelefonoutilService } from './telefonoutil.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SponsorService} from '../sponsor/sponsor.service';
import {Router} from '@angular/router';
import {Sponsor} from '../sponsor/sponsorObj';
import {Telefono} from './telefonoObj';

@Component({
  selector: 'app-telefonosutiles',
  templateUrl: './telefonosutiles.component.html',
  styleUrls: ['./telefonosutiles.component.css']
})
export class TelefonosutilesComponent implements OnInit {

  telefonos: Telefono[] = new Array<Telefono>();
  telefono: telefono;

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
  agretelefono: EventEmitter<Sponsor> = new EventEmitter<Sponsor>();

  telefonosForm;

  constructor(private router: Router, private sponsorsService: SponsorService) {
  }

  ngOnInit() {
    this.sponsorsService.getSponsors().subscribe(res => {this.telefonos = res;
    });
    this.crearSponsorForm(this.telefono);
  }


  onSubmitSponsor(): void {
    this.telefono = this.prepGuardarSponsor();
    this.sponsorsService.postSponsors(this.telefono)
      .subscribe(res => {
        this.telefonos.push(this.telefono);
      });
    this.resetFormSponsor();
  }

  deleteSponsor(index: number, id) {
    const pos = index;
    this.telefonos.splice(pos, 1);
    this.sponsorsService.deleteSponsors(id).subscribe();
  }

  prepGuardarSponsor(): Sponsor {
    const formModel = this.telefonosForm.value;
    const guardarGasto = new Sponsor({
      id: formModel.id as number,
      sponsor: formModel.sponsor as string,
      montoParcial: formModel.montoParcial as string,
      monto: formModel.monto as string,
    });
    return guardarGasto;
  }
  editSponsor(i, id) {
    this.router.navigate(['/gastosgenerales/modificar/', id]);
  }

  resetFormSponsor() {
    this.telefonosForm.reset({
      sponsor: '',
      montoParcial: '',
      monto: '',
    });
  }


  filterChanged(selectedValue: string) {
    console.log('value is ', selectedValue);
    this.sponsorsService.getSponsors();
  }


  crearSponsorForm(telefono = new Telefono()) {
    this.telefonosForm = new FormGroup({
      sponsor: new FormControl(telefono.sponsor, {
        validators: Validators.required
      }),
      montoParcial: new FormControl(telefono.montoParcial, {
        validators: Validators.required
      }),
      monto: new FormControl(telefono.monto, {
        validators: Validators.required
      }),
    });
  }
}
