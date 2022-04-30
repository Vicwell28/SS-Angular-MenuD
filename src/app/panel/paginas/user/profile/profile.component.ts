import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username! : any; 
  rol! : any; 
  email! : any;
  idUser! : any;

  constructor(
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.userService.getShowUser("1").subscribe(data => {
      console.log(data.data);
      this.username = data.data.username; 
      this.rol = data.data.Role.name; 
      this.email = data.data.email; 
      this.idUser = data.data.id;
    })
  }

  // openDialogStore(): void {
  //   const dialogRef = this.dialog.open(DialogCategoryComponent, {
  //     width: '30%',
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log('The dialog was closed');
  //     this.ngOnInit();
  //   });
  // }
}
