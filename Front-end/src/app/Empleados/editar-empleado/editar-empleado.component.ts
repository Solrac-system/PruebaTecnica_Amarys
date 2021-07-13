import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParsearErroresAPI } from 'src/app/Utilidades/listado-generico/utilidades';
import { empleadoCrearDto, empleadoDto } from '../empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  modelo:empleadoDto;
  errores:string[]=[];

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private empleadoService:EmpleadosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.empleadoService.GetForID(params.id).subscribe(empleado=>{
        this.modelo=empleado;
      },()=>this.router.navigate(['/Empleados']));
    });
  }

  Guardar(empleado:empleadoCrearDto){
   this.empleadoService.Edit(this.modelo.id,empleado).subscribe(()=>{
    this.router.navigate(['/Empleados']);
   },error => this.errores = ParsearErroresAPI(error));

  }


}
