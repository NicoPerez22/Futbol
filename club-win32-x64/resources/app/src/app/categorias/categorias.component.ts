import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categoria:{
    id: number
    nsocio: number
    nombre: string
    apellido: string
    pago: number
  };

  constructor() { }

  ngOnInit() {
  }

}
