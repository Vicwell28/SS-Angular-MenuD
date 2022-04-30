import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI } from 'src/app/shared/Models/login.interface';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(
    private user : UserService, 
    private router:Router, 
    private fb : FormBuilder, 
    private alerts : AlertasService, 
    ) { }
    
    errorStatus : boolean = false; 
    errorMsg : string = '';
    
    ngOnInit(): void {  }
    
    public loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, , Validators.minLength(5)]], 
    });

  login(){
 
    this.user.postLogin(this.loginForm.value).subscribe(datos => {
      console.log(datos);
      if(datos.length == 1){
        if(!datos[0].message.status){
          this.alerts.alertFail(datos[0].message.message)
          this.ngOnInit(); 
        }
        else{
          this.alerts.alertOk(datos[0].message.message)
          console.log(datos[0].data.token)
          this.user.setToken(datos[0].data.token)
          setTimeout(()=>{
            this.router.navigateByUrl('../../panel')
          }, 1000); 
        }
      }
      else{
        for (let index = 0; index < datos.length; index++) {
          this.alerts.alertFail(datos[index].message.message)
        }
        this.ngOnInit(); 
      }
    })
  }
}
