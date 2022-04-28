import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent  {

  constructor(private fb : FormBuilder) { }

  public signinForm = this.fb.group({
    username : ['', [Validators.required, Validators.minLength(5)]], 
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, , Validators.minLength(5)]], 
    password_confirmation : ['', [Validators.required, , Validators.minLength(5)]] 
  });


  enviar(value : any){
    console.log(value); 
  }


}
