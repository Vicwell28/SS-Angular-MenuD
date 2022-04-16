import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  //AQUI VAMOS A DECLARAR VARIABLES CON SU TIPO DE DATO
  lista : string[]; 

  constructor(){
    //AQUI VAMOS A INICIALIZAR LAS VARIABLES
    this.lista = ["Lista"];

  }

  ngOnInit(): void {
    
  }
}
