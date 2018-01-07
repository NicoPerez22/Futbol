import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { JugadorComponent } from './jugador/jugador.component';
import { GastosgeneralesComponent } from './gastosgenerales/gastosgenerales.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { GastomicroComponent } from './gastomicro/gastomicro.component';
import { IngresopartidoComponent } from './ingresopartido/ingresopartido.component';
import { ArbitrosmedicosComponent } from './arbitrosmedicos/arbitrosmedicos.component';
import { TelefonosutilesComponent } from './telefonosutiles/telefonosutiles.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    JugadorComponent,
    GastosgeneralesComponent,
    SponsorComponent,
    GastomicroComponent,
    IngresopartidoComponent,
    ArbitrosmedicosComponent,
    TelefonosutilesComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
