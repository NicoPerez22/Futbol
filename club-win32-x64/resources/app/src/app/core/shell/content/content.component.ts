import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    // lineChart
    public lineChartData: Array<any> = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Pagos Jugadores'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Sponsors'},
      {data: [18, 48, 77, 9, 100, 27, 40], label: 'Ingresos Partidos'}
    ];
    public lineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
    public lineChartOptions: any = {
      responsive: true
    };
    

  constructor() { }

  ngOnInit() {
  }

}
