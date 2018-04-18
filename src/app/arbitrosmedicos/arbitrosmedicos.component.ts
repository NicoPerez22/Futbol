import { Component, OnInit } from '@angular/core';
import { Arbitro, Medico } from './arbimedObj';
import { ArbitrosmedService } from './arbitrosmed.service';

@Component({
  selector: 'app-arbitrosmedicos',
  templateUrl: './arbitrosmedicos.component.html',
  styleUrls: ['./arbitrosmedicos.component.css']
})
export class ArbitrosmedicosComponent implements OnInit {

  arbitros: Arbitro[];
  arbitro: Arbitro;
  medicos: Medico[];
  medico: Medico;

  constructor(arbiMedService: ArbitrosmedService) { }

  ngOnInit() {
    //this.arbiMedService.getArbitros()
    //.subscribe(res => {
    //  this.arbitros = res;
    //});

    //this.arbiMedService.getmedicos()
   // .subscribe(res => {
    //  this.arbitros = res;
    //});
  }

}
