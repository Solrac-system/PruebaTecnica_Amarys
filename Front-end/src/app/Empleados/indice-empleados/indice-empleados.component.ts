import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { empleadoDto } from '../empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-indice-empleados',
  templateUrl: './indice-empleados.component.html',
  styleUrls: ['./indice-empleados.component.css']
})
export class IndiceEmpleadosComponent implements OnInit {

  empleados:empleadoDto[];
  showColumn=['id','nombres','acciones'];
  CantidadRegistros;
  registrosAmostrar=10;
  actualPage=1;

  constructor(private empleadoService:EmpleadosService) { }

  ngOnInit(): void {
    this.CargarRegistros(this.actualPage,this.registrosAmostrar);
  }

  CargarRegistros(pagina:number,mostrartotalRegistros){
    this.empleadoService.GetAll(pagina,mostrartotalRegistros).subscribe((respuesta:HttpResponse<empleadoDto[]>)=>{
      this.empleados=respuesta.body;
      // console.log(respuesta.headers.get("CantidadRegistros"));
      this.CantidadRegistros = respuesta.headers.get("CantidadRegistros");
    },error =>console.error(error));
  }

  UpdatePage(datos:PageEvent){
    this.actualPage=datos.pageIndex+1;
    this.registrosAmostrar=datos.pageSize;
    this.CargarRegistros(this.actualPage,this.registrosAmostrar);
  }

  Delete(id:number){
    this.empleadoService.Delete(id).subscribe(()=>{
      this.CargarRegistros(this.actualPage,this.registrosAmostrar);
    },error =>console.error(error));
  }

}
