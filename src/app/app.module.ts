import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor.service';

import { LoadingService } from './shared/services/loading.service';

import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';


import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './shared/interceptors/loading-interceptor.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule, 
    FormsModule, 
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
