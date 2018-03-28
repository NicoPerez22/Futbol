import { Component, OnInit } from '@angular/core';
import { AddjugadorService } from './addjugador.service';
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import { Jugador } from './JugadorObj';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

    jugador: Array<any>;
    data: any[];
    dtOptions: any = {};

    
    constructor(private addjugadorService: AddjugadorService) {  }
  
  ngOnInit() {
   // this.dtOptions = {
    //  language: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json'
    //};

    this.addjugadorService.getJugador()
    .subscribe(res => this.jugador = res);
  }

 // save(): void {
   // this.addjugadorService.updateJugador(this.jugador)
   //   .subscribe(() => this.goBack());
  //}

}