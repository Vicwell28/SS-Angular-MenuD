import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { iconI } from 'src/app/shared/Models/icon.interface';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { DialogData } from '../../dialog-category/dialog-category.component';

@Component({
  selector: 'app-dialog-view-asignar',
  templateUrl: './dialog-view-asignar.component.html',
  styles: ['.example-full-width {width: 100%;}']
})
export class DialogViewAsignarComponent implements OnInit {

  arreglodeid! : any[];

  icons : iconI [] = [
    {value: 'search', viewValue: 'search'},
    {value: 'home', viewValue: 'home'},
    {value: 'account_circle', viewValue: 'account_circle'},
    {value: 'settings', viewValue: 'settings'},
    {value: 'done', viewValue: 'done'},
    {value: 'info', viewValue: 'info'},
    {value: 'check_circle', viewValue: 'check_circle'},
    {value: 'visibility', viewValue: 'visibility'},
    {value: 'favorite', viewValue: 'favorite'},
    {value: 'logout', viewValue: 'logout'},
    {value: 'description', viewValue: 'description'},
    {value: 'favorite_border', viewValue: 'favorite_border'},
    {value: 'lock', viewValue: 'lock'},
    {value: 'schedule', viewValue: 'schedule'},
  ];

  Categorias : any; 
 constructor(
  private alertService : AlertasService, 
  private categoryService : CategoriaService,
    private fb : FormBuilder,
    public dialogRef: MatDialogRef<DialogViewAsignarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  public categoryForm = this.fb.group({
    role_id : [this.data.id], 
    view_id : [], 
  })

  ngOnInit(): void {
    console.log(this.data);
    this.categoryService.getIndexCategoria().subscribe(datos => {
      this.Categorias = datos.data;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ok() : void {
    console.log(this.categoryForm.value); 
    // this.categoryService.postStoreCategoria(this.categoryForm.value).subscribe(datos => {
    //   if(datos.length >= 1){ 
    //     if(!datos[0].message.status){
    //       this.alertService.alertFail(datos[0].message.message)
    //     }
    //     else{
    //       console.log("Entro en el else");
    //       this.alertService.alertOk(datos.message.message)
    //     }
    //   }
    //   else{
    //     console.log("entro en el else")
    //     if(datos.message.status){
    //       this.alertService.miniAlertOk(datos.message.message)
    //     }
    //     else {
    //       this.alertService.miniAlertFail(datos.message.message)
    //     }
    //   }
    //   this.dialogRef.close(); 
    // })
  }

  getViewId(event : any, id : any){
    this.arreglodeid.push(id); 
    this.categoryForm.value.view_id = this.arreglodeid;
    console.log(id);
    console.log(this.categoryForm.value); 
  }
// 
}