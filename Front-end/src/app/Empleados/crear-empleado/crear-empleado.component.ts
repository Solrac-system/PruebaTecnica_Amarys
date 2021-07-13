import { empleadoCrearDto } from './../empleado';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { ParsearErroresAPI } from 'src/app/Utilidades/listado-generico/utilidades';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  errores:string[]=[];

  constructor(private router:Router,private empleadoService:EmpleadosService) { }

  ngOnInit(): void {
  }

  Guardar(empleado:empleadoCrearDto){
    this.empleadoService.Create(empleado).subscribe(()=>{
      this.router.navigate(['/Empleados']);
    },(error)=>this.errores=ParsearErroresAPI(error));
   }

}
