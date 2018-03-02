import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { FooterComponent } from './shell/footer/footer.component';
import { HeaderComponent } from './shell/header/header.component';
import { SideBarComponent } from './shell/side-bar/side-bar.component';
import { ContentComponent } from './shell/content/content.component';
import { CategoriasComponent } from '../categorias/categorias.component';
import { SponsorComponent } from '../sponsor/sponsor.component';
import { GastosgeneralesComponent } from '../gastosgenerales/gastosgenerales.component';
import { JugadorComponent } from '../jugador/jugador.component';
import { TelefonosutilesComponent } from '../telefonosutiles/telefonosutiles.component';
import { ArbitrosmedicosComponent } from '../arbitrosmedicos/arbitrosmedicos.component';
import { GastomicroComponent } from '../gastomicro/gastomicro.component';
import { IngresopartidoComponent } from '../ingresopartido/ingresopartido.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShellComponent, 
    FooterComponent, 
    HeaderComponent, 
    SideBarComponent, 
    ContentComponent, 
    CategoriasComponent, 
    SponsorComponent, 
    JugadorComponent, 
    TelefonosutilesComponent,
    ArbitrosmedicosComponent, 
    GastomicroComponent, 
    GastosgeneralesComponent,
    IngresopartidoComponent],
    
  exports: [ShellComponent]
})
export class CoreModule { }
