import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {CategoriasComponent} from '../categorias.component';



const routes: Routes = [
  {
    path: '',
    component: CategoriasComponent,
    children: [
      {path: 'modificar/:id', component: CategoriasComponent},
      {path: ':id', component: CategoriasComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class JugadoresEditModule { }
