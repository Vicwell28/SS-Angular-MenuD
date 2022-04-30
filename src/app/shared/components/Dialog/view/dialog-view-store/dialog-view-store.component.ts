import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { iconI } from 'src/app/shared/Models/icon.interface';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { VistaService } from 'src/app/shared/services/vista.service';
import { DialogData } from '../../dialog-category/dialog-category.component';

@Component({
  selector: 'app-dialog-view-store',
  templateUrl: './dialog-view-store.component.html',
  styles: ['.example-full-width {width: 100%;}']
})
export class DialogViewStoreComponent implements OnInit {

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

  categorias : any;

 constructor(
    private alertService : AlertasService, 
    private categoryService : CategoriaService,
    private viewService : VistaService,
    private fb : FormBuilder,
    public dialogRef: MatDialogRef<DialogViewStoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  public viewForm = this.fb.group({
    name : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]], 
    icon : ['',], 
    category_id : ['',], 
    route : ['',[Validators.required, Validators.minLength(3), Validators.maxLength(40)]], 
    level : [, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]], 
    status : [true], 
  })

  ngOnInit(): void {
    this.categoryService.getIndexCategoria().subscribe(data => {
      this.categorias = data.data
      console.log(this.categorias);
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ok() : void {
    console.log(this.viewForm.value);
    this.viewService.postStoreView(this.viewForm.value).subscribe(datos => {
      if(datos.length >= 1){ 
        if(!datos[0].message.status){
          this.alertService.alertFail(datos[0].message.message)
        }
        else{
          console.log("Entro en el else");
          this.alertService.alertOk(datos.message.message)
        }
      }
      else{
        console.log("entro en el else")
        if(datos.message.status){
          this.alertService.miniAlertOk(datos.message.message)
        }
        else {
          this.alertService.miniAlertFail(datos.message.message)
        }
      }
      this.dialogRef.close(); 
    })
  }

}