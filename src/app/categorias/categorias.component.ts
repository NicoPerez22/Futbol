import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  data: any[];
  dtOptions: any = {};
  constructor() { }
  

  ngOnInit(): void {
    this.dtOptions = {
      language: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json'
    };
    this.data = [
      {
          "NSocio":       "Tiger Nixon",
          "FechaPago":   "System Architect",
          "Nombre":     "$3,120",
          "Telofono": "2011/04/25",
          "Apellido":     "Edinburgh",
          "Observacion":       "5421",
          "Pago": "asdsda",
          "PlanillaMedica": "dasdsda",
      },
      {
        "NSocio":       "Tiger asdasd",
        "FechaPago":   "System Arcdasditect",
        "Nombre":     "$3,1200",
        "Telofono": "2011/045/25",
        "Apellido":     "Edinbudargh",
        "Observacion":       "542d1",
        "Pago": "asdsdsa",
        "PlanillaMedica": "dasdsddaa",
      },
  ]

  }
}