import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCategoriaComponent } from './paginas/category/agregar-categoria/agregar-categoria.component';
import { AgregandoRolComponent } from './paginas/rol/agregando-rol/agregando-rol.component';
import { AgregarUserComponent } from './paginas/user/agregar-user/agregar-user.component';
import { ProfileComponent } from './paginas/user/profile/profile.component';
import { AgregadnoVistaComponent } from './paginas/view/agregadno-vista/agregadno-vista.component';
import { AsignandoVistasComponent } from './paginas/view/asignando-vistas/asignando-vistas.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  { path: '', component: PanelComponent, children: [
    {path : 'profile', component : ProfileComponent}, 
    {path : 'categoria/categoria', component : AgregarCategoriaComponent}, 
    {path : 'categoria/vista', component : AgregadnoVistaComponent}, 
    {path : 'categoria/asignar/vista', component : AsignandoVistasComponent}, 
    {path : 'usuario/usuarios', component : AgregarUserComponent}, 
    {path : 'usuario/roles', component : AgregandoRolComponent}, 
    {path : '', redirectTo : 'panel', pathMatch : 'full'}, 
    {path : '**', redirectTo : 'panel'}
   ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
