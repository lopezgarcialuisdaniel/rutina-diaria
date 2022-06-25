import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //  <--- NGMODEL
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RutinaDetalleComponent } from './rutina-detalle/rutina-detalle.component';
import { RutinasComponent } from './rutinas/rutinas.component';

import { AppRoutingModule } from './app-routing.module';
import { ProcedimientosComponent } from './procedimientos/procedimientos.component';

@NgModule({
  declarations: [
    AppComponent,
    RutinasComponent,
    RutinaDetalleComponent,
    DashboardComponent,
    ProcedimientosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
