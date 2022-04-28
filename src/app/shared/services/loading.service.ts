import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public isLoadin$ : any = false;

  constructor() { }


  Lshow(): void {
    this.isLoadin$ = true;
   }
 
   Lhide(): void {
     this.isLoadin$ = false;
   }

}