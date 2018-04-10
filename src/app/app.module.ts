import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {CoreModule} from './core/core.module';
import {ShellComponent} from './core/shell/shell.component';
import { AddjugadorService } from './categorias/addjugador.service';
import { MicrosService } from './gastomicro/micros.service';
import { GastosgeneralesService } from './gastosgenerales/gastosgenerales.service';



@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    BrowserModule
  ],
  providers: [AddjugadorService, 
    MicrosService,
    GastosgeneralesService
  ],
  bootstrap: [ShellComponent]
})
export class AppModule { }
