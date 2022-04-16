import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseI } from '../Models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class VistaService {

  url = environment.url; 

  constructor(private http : HttpClient) { }

  getIndexVista():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}logout`); 
  }

  postStoreVista(Vista : any):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${this.url}logout`, Vista); 
  }

  getShowVista(id : number):Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}logout`); 
  }

  putUpdateVista(id : number, Vista : any):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.url}logout`, Vista); 
  }

  deleteDestroyVista(id : number):Observable<ResponseI>{
    return this.http.delete<ResponseI>(`${this.url}logout`); 
  }
}
