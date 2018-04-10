import { Component, OnInit } from '@angular/core';
import { Micro } from './microObj';
import { MicrosService } from './micros.service';

@Component({
  selector: 'app-gastomicro',
  templateUrl: './gastomicro.component.html',
  styleUrls: ['./gastomicro.component.css']
})
export class GastomicroComponent implements OnInit {

  micros: Micro[];
  micro: Micro;

  constructor(private microsService: MicrosService) { }

  ngOnInit() {
    this.microsService.getMicro()
    .subscribe(res => {
      this.micros = res;
    });


    
  }

}
