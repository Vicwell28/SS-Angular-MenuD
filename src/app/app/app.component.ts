import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  //AQUI VAMOS A DECLARAR VARIABLES CON SU TIPO DE DATO
  loadingStatus$!: Observable<boolean>;

  lista : string[]; 

  constructor(private loadingService: LoadingService){
    //AQUI VAMOS A INICIALIZAR LAS VARIABLES
    this.lista = ["Lista"];
  }

  ngOnInit(): void {
    this.initProgress();
  }
  
  initProgress(): void {
    this.loadingStatus$ = this.loadingService.listenLoading();
  }
}
