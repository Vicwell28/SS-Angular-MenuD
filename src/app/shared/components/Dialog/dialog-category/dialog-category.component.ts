  import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-category',
  templateUrl: './dialog-category.component.html',
  styleUrls: ['./dialog-category.component.scss']
})
export class DialogCategoryComponent implements OnInit {

 

 constructor(
    private fb : FormBuilder,
    public dialogRef: MatDialogRef<DialogCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  public categoryForm = this.fb.group({
    name : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]], 
    icon : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]], 
    level : [, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]], 
    status : [true], 
  })

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ok() : void {
    console.log(this.categoryForm.value);
    this.dialogRef.close(); 
  }

}
