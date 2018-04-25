import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import * as FusionCharts from 'fusioncharts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { ChartsModule } from 'ng2-charts';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ChartComponent } from './shell/chart/chart.component';
import { Chart2Component } from './shell/chart2/chart2.component';
import { HomeComponent } from '../home/home.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pagosjugadores', component: CategoriasComponent },
  { path: 'gastosgenerales', component: GastosgeneralesComponent },
  { path: 'ingresopartido', component: IngresopartidoComponent},
  { path: 'arbitrosmedicos', component: ArbitrosmedicosComponent},
  { path: 'sponsors', component: SponsorComponent},
  { path: 'telefonos', component: TelefonosutilesComponent},
  { path: 'gastosmicro', component: GastomicroComponent},
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DataTablesModule,
    ChartsModule,
    FormsModule,
    FusionChartsModule,
    RoundProgressModule,
    ReactiveFormsModule,

    RouterModule.forRoot(
      appRoutes
    )

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
    IngresopartidoComponent,
    ChartComponent,
    HomeComponent,
    Chart2Component],

  exports: [ShellComponent]
})
export class CoreModule { }
