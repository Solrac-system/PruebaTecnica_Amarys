export interface empleadoDto{
  id:number;
  nombres:string;
  cedula:number;
  fechaNacimiento:Date;
}

export interface empleadoCrearDto{
  nombres:string;
  cedula:number;
  fechaNacimiento:Date;
}
