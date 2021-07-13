import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errores-api',
  templateUrl: './errores-api.component.html',
  styleUrls: ['./errores-api.component.css']
})
export class ErroresApiComponent implements OnInit {


  @Input()
  errores:String[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
