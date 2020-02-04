import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UserService]
})
export class RegistrationComponent implements OnInit {

  constructor(public router : Router , public userService : UserService) { }

  userData = {
    name : "",
    email : "",
    password : "",
    password2 : ""
  }
  ngOnInit() { 
    this.isLogged()
  }

  registration(){
    this.userService.registration(this.userData)
     .subscribe(
       res => {
         if (typeof res == "object") {
           alert("Done !")
           this.router.navigate(["/login"])
         } else {
           alert(res)
         }
       },
       err => {
         console.log(err)
       }
     )
  }

  isLogged(){
    if (this.userService.isLogged()) {
      this.router.navigate(["/home"])
    }
  }

}
