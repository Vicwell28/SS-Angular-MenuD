import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseI } from '../Models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url = environment.url; 

  constructor(private http : HttpClient) { }

  getIndexCategoria():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}category`); 
  }

  postStoreCategoria(Categoria : any):Observable<any>{
    return this.http.post<any>(`${this.url}category`, Categoria); 
  }

  getShowCategoria(id : number):Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}category/${id}`); 
  }

  putUpdateCategoria(id : number, Categoria : any):Observable<ResponseI>{
    return this.http.put<ResponseI>(`${this.url}category/${id}`, Categoria); 
  }

  deleteDestroyCategoria(id : number):Observable<ResponseI>{
    return this.http.delete<ResponseI>(`${this.url}category/${id}`); 
  }

  getCategoryByRole():Observable<ResponseI>{
    return this.http.get<ResponseI>(`${this.url}get/category/role`); 
  }
}
