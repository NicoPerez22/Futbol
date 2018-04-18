import { Component, OnInit } from '@angular/core';
import { AddjugadorService } from './addjugador.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';  
import { Jugador } from './JugadorObj';
import { HttpClient } from '@angular/common/http/src/client';
import { Params } from '@angular/router/src/shared';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

    data: any[];
    dtOptions: any = {};
    jugadores: Jugador[];
    jugador: Jugador; 

    private truefalse: boolean = false;


    myEvent(event) {
      alert('Puto')
      console.log(event);
    }
    constructor(private addjugadorService: AddjugadorService) { }
  
  ngOnInit() {
   this.addjugadorService.getJugador()
   .subscribe(res => {
     this.jugadores = res;
   });
  }

  addJugador(){
    this.addjugadorService.addJugador(this.jugador)
    .subscribe(Jugador => this.jugadores.push(Jugador));
    } 
  

}