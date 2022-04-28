import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { PanelComponent } from './panel/panel.component';
import { MaterialModule } from '../shared/modules/material.module';
import { ProfileComponent } from './paginas/user/profile/profile.component';
import { AgregarCategoriaComponent } from './paginas/category/agregar-categoria/agregar-categoria.component';
import { AgregadnoVistaComponent } from './paginas/view/agregadno-vista/agregadno-vista.component';
import { AsignandoVistasComponent } from './paginas/view/asignando-vistas/asignando-vistas.component';
import { AgregarUserComponent } from './paginas/user/agregar-user/agregar-user.component';
import { AgregandoRolComponent } from './paginas/rol/agregando-rol/agregando-rol.component';

@NgModule({
  declarations: [
    PanelComponent,
    ProfileComponent,
    AgregarCategoriaComponent,
    AgregadnoVistaComponent,
    AsignandoVistasComponent,
    AgregarUserComponent,
    AgregandoRolComponent,
  ],
  imports: [
    CommonModule, 
    PanelRoutingModule, 
    SharedComponentsModule,
    MaterialModule
  ]
})
export class PanelModule { }
