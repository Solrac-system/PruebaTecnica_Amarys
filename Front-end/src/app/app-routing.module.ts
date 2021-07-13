import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './Empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './Empleados/editar-empleado/editar-empleado.component';
import { IndiceEmpleadosComponent } from './Empleados/indice-empleados/indice-empleados.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'Empleados',component:IndiceEmpleadosComponent},
  {path:'Empleados/Crear',component:CrearEmpleadoComponent},
  {path:'Empleados/Editar/:id',component:EditarEmpleadoComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
