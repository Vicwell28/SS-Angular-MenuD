import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginI } from '../Models/login.interface';
import { RegistrarseI } from '../Models/registrarse.interface';
import { ResponseI } from '../Models/response.interface';
import { UserI } from '../Models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.url; 

  constructor(
    private http : HttpClient
    ) { }

  //METODOS AUTH

  postLogin(form:LoginI):Observable<any>{
    return this.http.post<any>(`${this.url}login`, form);
  }

  postSignUp(form:RegistrarseI):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.url}logout`, form); 
  }

  postLogout(token: any, body=""){
    localStorage.removeItem("Token")
    this.http.post(`${this.url}logout`,body);
  }

  //FUNCIONES PRINCIPALES DE USER
  getIndexUser():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}logout`); 
  }

  postStoreUser(User : UserI):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.url}logout`, User); 
  }

  getShowUser(id : number):Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}logout`); 
  }

  putUpdateUser(id : number, User : any):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.url}logout`, User); 
  }

  deleteDestroyUser(id : number):Observable<ResponseI>{
    return this.http.delete<ResponseI>(`${this.url}logout`); 
  }
 
  //GUARDAR DATOS LOCAL
  setToken(token : string){
    localStorage.setItem("Token", token);
  }

  getToken(){
    return localStorage.getItem("Token");
  }

  delToken(){
    localStorage.clear(); 
  }
}
