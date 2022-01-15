import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarUComponent } from './main/buscar-u/buscar-u.component';
import { NuevoLibroComponent } from './main/nuevo-libro/nuevo-libro.component';
import { DatosComponent } from './main/datos-nuevos/datos.component';
import { EditarULComponent } from './main/editar-u-l/editar-u-l.component';
import { ConsultarComponent } from './main/consultar/consultar.component';

const routes: Routes = [
  {
    path: '',
    component: BuscarUComponent
  },
  {
    path: 'nuevo-libro',
    component: NuevoLibroComponent
  },
  {
    path: 'estatus',
    component: BuscarUComponent
  },
  {
    path: 'nuevo-usuario',
    component: DatosComponent
  },
  {
    path: 'editar',
    component: EditarULComponent
  },
  {
    path: 'consultar',
    component: ConsultarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
