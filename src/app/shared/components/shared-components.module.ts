import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../modules/material.module';




@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ], 
  exports : [NavBarComponent]
})
export class SharedComponentsModule { }
