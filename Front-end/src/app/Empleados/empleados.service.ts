import { empleadoCrearDto, empleadoDto } from './empleado';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private apiURL =environment.apiURL +'empleados';

  constructor(private http:HttpClient) { }

  public GetAll(pagina:number,CantidadRegistros:number) : Observable<any>{
    let params=new HttpParams();
    params=params.append('pagina',pagina.toString());
    params=params.append('recordPorPagina', CantidadRegistros.toString());
    return this.http.get<empleadoDto[]>(this.apiURL,{observe:'response',params});
  }

  public GetForID(id:number): Observable<empleadoDto>{
    return this.http.get<empleadoDto>(`${this.apiURL}/${id}`);
 }
  public Create(empleado:empleadoCrearDto){
    return this.http.post(this.apiURL,empleado);
  }

  public Edit(id:number,empleado:empleadoCrearDto){
    return this.http.put(`${this.apiURL}/${id}`,empleado);
 }

 public Delete(id:number){
  return this.http.delete(`${this.apiURL}/${id}`);
}
}
