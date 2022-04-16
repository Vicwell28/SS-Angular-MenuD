import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(
    private user : UserService, 
    private route : Router
  )
  {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.user.getToken()){
      return true;
    }
  
    this.route.navigate(['../auth']);
    return false;
  }
}
