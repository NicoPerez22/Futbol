import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {CoreModule} from './core/core.module';
import {ShellComponent} from './core/shell/shell.component';
import { AddjugadorService } from './categorias/addjugador.service';



@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    BrowserModule
  ],
  providers: [AddjugadorService],
  bootstrap: [ShellComponent]
})
export class AppModule { }
