import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }

  alertOk(text : string){
    Swal.fire({
      icon: 'success',
      title: 'OK!',
      text: text,
    })
  }

  alertFail(text : string){
    Swal.fire({
      icon: 'error',
      title: 'Oppss...!',
      text: text,
    })
  }

  miniAlertOk(text : string){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
    })

    Toast.fire({
      icon: 'success',
      title: text
    })
  }

  miniAlertFail(text : string){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
    })

    Toast.fire({
      icon: 'error',
      title: text
    })
  }
}
