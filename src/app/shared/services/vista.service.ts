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

  getIndexView():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}view`); 
  }

  postStoreView(View : any):Observable<any>{
    return this.http.post<any>(`${this.url}view`, View); 
  }

  getShowView(id : number):Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}view/${id}`); 
  }

  putUpdateView(id : number, View : any):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.url}view/${id}`, View); 
  }

  deleteDestroyView(id : number):Observable<ResponseI>{
    return this.http.delete<ResponseI>(`${this.url}view/${id}`); 
  }
}
