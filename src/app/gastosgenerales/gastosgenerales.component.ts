import { Component, OnInit } from '@angular/core';
import { GastosgeneralesService } from './gastosgenerales.service';
import { GastosG } from './gastosObj';

@Component({
  selector: 'app-gastosgenerales',
  templateUrl: './gastosgenerales.component.html',
  styleUrls: ['./gastosgenerales.component.css']
})
export class GastosgeneralesComponent implements OnInit {

  gastos: GastosG[];
  gasto: GastosG;

  constructor(private gastosGeneralesservice: GastosgeneralesService) { }

  ngOnInit() {
    this.gastosGeneralesservice.getGastos()
    .subscribe(res => {
      this.gastos = res;
    }

    )
  }

}
