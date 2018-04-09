import { Component, OnInit } from '@angular/core';
import { AddjugadorService } from './addjugador.service';
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import { Jugador } from './JugadorObj';
import { HttpClient } from '@angular/common/http/src/client';
import { Params } from '@angular/router/src/shared';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

    data: any[];
    dtOptions: any = {};
    jugadores: Jugador[];
    
    constructor(private addjugadorService: AddjugadorService) { }
  
  ngOnInit() {
   this.addjugadorService.getJugador()
   .subscribe(res => {
     this.jugadores = res;
   });
  }

}