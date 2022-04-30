import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseI } from '../Models/response.interface';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  getIndexRole(): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.url}role`);
  }

  postStoreRole(Role: any): Observable<any> {
    return this.http.post<any>(`${this.url}role`, Role);
  }

  getShowRole(id: number): Observable<ResponseI> {
    return this.http.get<ResponseI>(`${this.url}role/${id}`);
  }

  putUpdateRole(id: number, Role: any): Observable<ResponseI> {
    return this.http.put<ResponseI>(`${this.url}role/${id}`, Role);
  }

  deleteDestroyRole(id: number): Observable<ResponseI> {
    return this.http.delete<ResponseI>(`${this.url}role/${id}`);
  }

  postAssignViewByRole(Role: any): Observable<any> {
    return this.http.post<any>(`${this.url}role/assign/view`, Role);
  }
}
