import { empleadoCrearDto } from './../empleado';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-empleado',
  templateUrl: './formulario-empleado.component.html',
  styleUrls: ['./formulario-empleado.component.css']
})
export class FormularioEmpleadoComponent implements OnInit {

  form:FormGroup;
  @Input()
  modelo:empleadoCrearDto;
  @Input()
  errores:string[]=[];

  @Output()
  onSubmit:EventEmitter<empleadoCrearDto> = new EventEmitter<empleadoCrearDto>();

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombres:['',{validators:[Validators.required]}],
      cedula:['',{validators:[Validators.required]}],
      fechaNacimiento:''
    });
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }

  }

  ErrorNombres(){
    var campo=this.form.get('nombres');
    if(campo.hasError('required')){
      return 'nombres requerido';
    }
    return '';
  }

  ErrorCedula(){
    var campo=this.form.get('cedula');
    if(campo.hasError('required')){
      return 'numero cedula requerido';
    }
    return '';
  }

  Guardar(){
    this.onSubmit.emit(this.form.value);
  }

}
