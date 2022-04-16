import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  Categorias : any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private user : UserService, 
    private router : Router,
    private category : CategoriaService
    ) {}

  ngOnInit(): void {
    this.category.getIndexCategoria().subscribe(datos => {
      this.Categorias = datos.data
      console.log(this.Categorias);
    })
  }

  addEvent(Uno : any, Dos : any){
    console.log(Uno); 
    console.log(Dos); 
  }

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  logout(){
    this.user.delToken(); 
    this.router.navigate(['../auth/login'])
  }

  perfil(){
    this.router.navigate(['../panel/profile'])
  }

}
