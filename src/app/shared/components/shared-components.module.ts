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


@NgModule({
  declarations: [NavBarComponent, TablaComponent, DialogCategoryComponent, TopTableComponent, DialogCategoryEditComponent],
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
