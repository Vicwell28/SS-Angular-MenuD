import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private router: Router,
    private alerts: AlertasService
  ) {}

  public signinForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, , Validators.minLength(5)]],
    password_confirmation: [
      '',
      [Validators.required, , Validators.minLength(5)],
    ],
  });

  enviar() {
    this.user.postSignUp(this.signinForm.value).subscribe((datos) => {
      console.log(datos);
      if (datos.length >= 1) {
        if (!datos[0].message.status) {
          this.alerts.alertFail(datos[0].message.message);
          this.ngOnInit();
        } else {
          this.alerts.alertOk(datos[0].message.message);
          console.log(datos[0].data.token);
          this.user.setToken(datos[0].data.token);
          setTimeout(() => {
            this.router.navigateByUrl('../../panel');
          }, 1000);
        }
      } else {
        this.alerts.alertOk(datos.message.message);
          console.log(datos.data.token);
          this.user.setToken(datos.data.token);
          setTimeout(() => {
            this.router.navigateByUrl('../../panel');
          }, 1000);
      }
    });
  }

  ngOnInit(): void {}
}
