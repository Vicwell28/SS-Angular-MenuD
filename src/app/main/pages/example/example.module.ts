import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './pages/example/example.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';


@NgModule({
  declarations: [
    ExampleComponent,
    MiPerfilComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
