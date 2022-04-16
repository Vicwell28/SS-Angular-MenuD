import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseI } from '../Models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url = environment.url; 

  constructor(private http : HttpClient) { }

  getIndexRol():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}logout`); 
  }

  postStoreRol(Rol : any):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.url}logout`, Rol); 
  }

  getShowRol(id : number):Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}logout`); 
  }

  putUpdateRol(id : number, Rol : any):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.url}logout`, Rol); 
  }

  deleteDestroyRol(id : number):Observable<ResponseI>{
    return this.http.delete<ResponseI>(`${this.url}logout`); 
  }
}
