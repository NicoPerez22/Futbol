import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CategoriasComponent} from '../categorias.component';


const routes: Routes = [
  {
    path: '',
    component: CategoriasComponent,
    children: [
      {path: ':id', component: CategoriasComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      routes
    )
  ],
  declarations: []
})
export class JugadoresEditModule {
}
