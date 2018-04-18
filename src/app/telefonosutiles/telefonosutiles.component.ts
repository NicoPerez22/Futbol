import { Component, OnInit } from '@angular/core';
import { TelefonosUtil } from './telefonoObj';
import { TelefonoutilService } from './telefonoutil.service';

@Component({
  selector: 'app-telefonosutiles',
  templateUrl: './telefonosutiles.component.html',
  styleUrls: ['./telefonosutiles.component.css']
})
export class TelefonosutilesComponent implements OnInit {

  gatos: TelefonosUtil[];
  gato: TelefonosUtil;

  constructor(private telefonoService: TelefonoutilService) { }

  ngOnInit() {
    this.telefonoService.gettele()
    .subscribe(res => {
      this.gatos
       = res;
    }
    
    )
  }

}
