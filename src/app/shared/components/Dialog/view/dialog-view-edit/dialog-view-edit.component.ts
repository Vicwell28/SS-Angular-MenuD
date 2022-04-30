import { Component,  Inject,  OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Category } from 'src/app/shared/Models/category.interface';
import { iconI } from 'src/app/shared/Models/icon.interface';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { VistaService } from 'src/app/shared/services/vista.service';

@Component({
  selector: 'app-dialog-view-edit',
  templateUrl: './dialog-view-edit.component.html',
  styles: ['.example-full-width {width: 100%;}']
})
export class DialogViewEditComponent implements OnInit {

  categorias : any;

  constructor(
    private alertService : AlertasService, 
    private categoryService : CategoriaService,
    private viewService : VistaService,
    private fb : FormBuilder,
    public dialogRef: MatDialogRef<DialogViewEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
  ) {}

  public viewForm = this.fb.group({
    name : [this.data.name, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]], 
    icon : [this.data.icon,], 
    category_id : [this.data.category_id,], 
    route : [this.data.route,[Validators.required, Validators.minLength(3), Validators.maxLength(40)]], 
    level : [this.data.level, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]], 
    status : [this.data.status], 
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
    this.viewService.putUpdateView(this.data.id, this.viewForm.value).subscribe(datos => {
      console.log(datos)
      if(datos.message.status){
        this.alertService.miniAlertOk(datos.message.message);
      }
      else {
        this.alertService.miniAlertFail("Algo salio mal");
      }
      this.dialogRef.close(); 
    })
  }

  icons : iconI[] = [
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
}