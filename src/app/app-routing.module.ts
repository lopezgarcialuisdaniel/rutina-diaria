import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RutinasComponent } from './rutinas/rutinas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RutinaDetalleComponent } from './rutina-detalle/rutina-detalle.component';
import { ProcedimientosComponent } from './procedimientos/procedimientos.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'rutina-detalle/:id', component: RutinaDetalleComponent },  
  {path: 'rutinas', component: RutinasComponent},
  {path: 'rutina-detalle/:id/procedimientos', component: ProcedimientosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
