import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AlertasService } from '../../services/alertas.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private alertaSweets : AlertasService
    ) {}

  bien(){
    console.log("clicw"); 
    this.alertaSweets.alertOk("Hola")
  }

  minibien(){
    this.alertaSweets.miniAlertOk("Hola")
  }

  mal(){
    this.alertaSweets.alertFail("Hola")
  }

  minimal(){
    this.alertaSweets.miniAlertFail("Hola")
  }

  addEvent(Uno : any, Dos : any){
    console.log(Uno); 
    console.log(Dos); 
  }

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

}
