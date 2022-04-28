import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public primaryColour = '#dd0031';
  public secondaryColour = '#1976d2';
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  isLoading = this.loadingService.isLoadin$; 

  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {
  }

}
