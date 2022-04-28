import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

import {Sort} from '@angular/material/sort';
import { indexUserI } from 'src/app/shared/Models/User/index.user.interface';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  indexUser : indexUserI[] = [];

  sortedDataIndexUser : indexUserI[] = [];

  Categorias : any;

  username : any;

  allUser : any; 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private user : UserService, 
    private router : Router,
    private category : CategoriaService, 
    ) { }

  ngOnInit(): void {
    this.category.getIndexCategoria().subscribe(datos => {
      this.Categorias = datos.data
      console.log(this.Categorias);
    }); 

    this.user.getShowUser(this.user.getToken()).subscribe(datos => {
      this.username = datos.data.username;
    });

    this.user.getIndexUser().subscribe(datos => {
      this.allUser = datos.data; 
      this.indexUser = datos.data;
      this.sortedDataIndexUser = this.indexUser.slice();
    });
  }

  logout(){
    this.user.delToken(); 
    this.router.navigate(['../auth/login'])
  }

  perfil(){
    this.router.navigate(['../panel/profile'])
  }


  sortData(sort: Sort) {
    console.log(sort);
    const data = this.indexUser.slice();
    console.log(sort.active); 
    console.group

    if (!sort.active || sort.direction === '') {
      this.sortedDataIndexUser = data;
      return;
    }

    this.sortedDataIndexUser = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'username':
          return compare(a.username, b.username, isAsc);
        case 'email':
          return compare(a.email, b.email, isAsc);
        case 'role':
          return compare(a.Role.name, b.Role.name, isAsc);
        default:
          return 0;
      }
    });
  }

  toco(){
    console.log('hola')
    this.router.navigate(['categoria/categoria'])
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
