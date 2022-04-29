import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private api : UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const authToken = this.api.getToken(); 
       const authReq = req.clone({headers: req.headers.set('Authorization', `Bearer ${authToken}`)});
       return next.handle(authReq);
  }
}