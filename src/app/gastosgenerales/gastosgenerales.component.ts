import { Component, OnInit } from '@angular/core';
import { GastosgeneralesService } from './gastosgenerales.service';
import { Gastos } from './gastosObj';

@Component({
  selector: 'app-gastosgenerales',
  templateUrl: './gastosgenerales.component.html',
  styleUrls: ['./gastosgenerales.component.css']
})
export class GastosgeneralesComponent implements OnInit {

  gastos: Gastos[];
  gasto: Gastos;

  constructor(private gastosGeneralesservice: GastosgeneralesService) { }

  ngOnInit() {
    this.gastosGeneralesservice.getGastos()
    .subscribe(res => {
      this.gastos = res;
    }

    )
  }

  onSubmitJugador() {
    this.gastos.push(this.gasto)
    this.gastosGeneralesservice.postGastos(this.gasto)
      .subscribe(gasto => this.gastos.push(gasto));
  }

}
