import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { SponsorService } from './sponsor.service';
import { Sponsor } from './sponsorObj';
import {Gasto} from '../gastosgenerales/gastosObj';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {GastosgeneralesService} from '../gastosgenerales/gastosgenerales.service';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {

  sponsors: Sponsor[] = new Array<Sponsor>();
  sponsor: Sponsor;

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
  agreSponsor: EventEmitter<Sponsor> = new EventEmitter<Sponsor>();

  sponsorsForm;

  constructor(private router: Router, private sponsorsService: SponsorService) {
  }

  ngOnInit() {
    this.sponsorsService.getSponsors().subscribe(res => {this.sponsors = res;
    });
    this.crearSponsorForm(this.sponsor);
  }


  onSubmitSponsor(): void {
    this.sponsor = this.prepGuardarSponsor();
    this.sponsorsService.postSponsors(this.sponsor)
      .subscribe(res => {
        this.sponsors.push(this.sponsor);
      });
    this.resetFormSponsor();
  }

  deleteSponsor(index: number, id) {
    const pos = index;
    this.sponsors.splice(pos, 1);
    this.sponsorsService.deleteSponsors(id).subscribe();
  }

  prepGuardarSponsor(): Sponsor {
    const formModel = this.sponsorsForm.value;
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
    this.sponsorsForm.reset({
      sponsor: '',
      montoParcial: '',
      monto: '',
    });
  }


  filterChanged(selectedValue: string) {
    console.log('value is ', selectedValue);
    this.sponsorsService.getSponsors();
  }


  crearSponsorForm(sponsor = new Sponsor()) {
    this.sponsorsForm = new FormGroup({
      sponsor: new FormControl(sponsor.sponsor, {
        validators: Validators.required
      }),
      montoParcial: new FormControl(sponsor.montoParcial, {
        validators: Validators.required
      }),
      monto: new FormControl(sponsor.monto, {
        validators: Validators.required
      }),
    });
  }
}
