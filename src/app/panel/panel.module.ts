import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { PanelComponent } from './panel/panel.component';
import { MaterialModule } from '../shared/modules/material.module';
import { ProfileComponent } from './paginas/user/profile/profile.component';

@NgModule({
  declarations: [
    PanelComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule, 
    PanelRoutingModule, 
    SharedComponentsModule,
    MaterialModule
  ]
})
export class PanelModule { }
