import { Component,  Inject,  OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Category } from 'src/app/shared/Models/category.interface';
import { iconI } from 'src/app/shared/Models/icon.interface';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dialog-user-edit',
  templateUrl: './dialog-user-edit.component.html',
  styles: ['.example-full-width {width: 100%;}']
})
export class DialogUserEditComponent implements OnInit {

  constructor(
    private alertService : AlertasService, 
    private userService : UserService,
    private fb : FormBuilder,
    public dialogRef: MatDialogRef<DialogUserEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category,
  ) {}

  public categoryForm = this.fb.group({
    name : [this.data.name, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]], 
    icon : [this.data.icon], 
    level : [this.data.level, [Validators.required]], 
    status : [this.data.status],
  })

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ok() : void {
    this.userService.putUpdateUser(this.data.id, this.categoryForm.value).subscribe(datos => {
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