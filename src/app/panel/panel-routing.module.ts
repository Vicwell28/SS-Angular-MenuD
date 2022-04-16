import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { ProfileComponent } from './paginas/user/profile/profile.component';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
  { path: '', component: PanelComponent, children: [
    {path : 'profile', component : ProfileComponent}
   ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
