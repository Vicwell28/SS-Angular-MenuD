import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptor implements HttpInterceptor {

  private countRequest = 0;

  constructor(private loadingService: LoadingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (!this.countRequest) {
          this.loadingService.show();
      }
      this.countRequest++;
      
      return next.handle(req).pipe(
          finalize(() => {
              this.countRequest--;
              if (!this.countRequest) {
                 this.loadingService.hide();
              }
          })
      )
  }
}
