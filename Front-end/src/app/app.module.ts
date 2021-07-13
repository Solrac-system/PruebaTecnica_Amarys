import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {ReactiveFormsModule} from '@angular/forms'
import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceEmpleadosComponent } from './Empleados/indice-empleados/indice-empleados.component';
import { CrearEmpleadoComponent } from './Empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './Empleados/editar-empleado/editar-empleado.component';
import { FormularioEmpleadoComponent } from './Empleados/formulario-empleado/formulario-empleado.component';
import { ListadoGenericoComponent } from './Utilidades/listado-generico/listado-generico.component';
import { ErroresApiComponent } from './Utilidades/errores-api/errores-api.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingPageComponent,
    IndiceEmpleadosComponent,
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    FormularioEmpleadoComponent,
    ListadoGenericoComponent,
    ErroresApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
