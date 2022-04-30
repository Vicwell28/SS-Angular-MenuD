import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../modules/material.module';
import { TablaComponent } from './tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DialogCategoryComponent } from './Dialog/dialog-category/dialog-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopTableComponent } from './top-table/top-table.component';
import { DialogCategoryEditComponent } from './Dialog/dialog-category-edit/dialog-category-edit.component';
import { DialgoRoleStoreComponent } from './Dialog/role/dialgo-role-store/dialgo-role-store.component';
import { DialgoRoleEditComponent } from './Dialog/role/dialgo-role-edit/dialgo-role-edit.component';
import { DialogUserStoreComponent } from './Dialog/user/dialog-user-store/dialog-user-store.component';
import { DialogUserEditComponent } from './Dialog/user/dialog-user-edit/dialog-user-edit.component';
import { DialogViewStoreComponent } from './Dialog/view/dialog-view-store/dialog-view-store.component';
import { DialogViewEditComponent } from './Dialog/view/dialog-view-edit/dialog-view-edit.component';
import { DialogViewAsignarComponent } from './Dialog/view/dialog-view-asignar/dialog-view-asignar.component';


@NgModule({
  declarations: [NavBarComponent, TablaComponent, DialogCategoryComponent, TopTableComponent, DialogCategoryEditComponent, DialgoRoleStoreComponent, DialgoRoleEditComponent, DialogUserStoreComponent, DialogUserEditComponent, DialogViewStoreComponent, DialogViewEditComponent, DialogViewAsignarComponent],
  imports: [
    CommonModule, 
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule, 
    FormsModule, 
    ReactiveFormsModule
  ], 
  exports : [NavBarComponent, TablaComponent, DialogCategoryComponent, TopTableComponent]
})
export class SharedComponentsModule { }
