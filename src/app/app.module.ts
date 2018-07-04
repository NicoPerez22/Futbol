import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {CoreModule} from './core/core.module';
import {ShellComponent} from './core/shell/shell.component';
import { AddjugadorService } from './categorias/addjugador.service';
import { MicrosService } from './gastomicro/micros.service';
import { GastosgeneralesService } from './gastosgenerales/gastosgenerales.service';
import { TelefonoutilService } from './telefonosutiles/telefonoutil.service';
import { ArbitrosmedService } from './arbitrosmedicos/arbitrosmed.service';
import { SponsorService } from './sponsor/sponsor.service';




@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    BrowserModule
  ],
  providers: [AddjugadorService,
    MicrosService,
    GastosgeneralesService,
    TelefonoutilService,
    ArbitrosmedService,
    SponsorService,
  ],
  bootstrap: [ShellComponent]
})
export class AppModule { }
