import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  constructor(public router : Router , public userService : UserService) { }

  userData = {
    email : "" ,
    password : ""
  }
  ngOnInit() {
     this.isLogged()
   }

  login(){
    this.userService.login(this.userData)
     .subscribe(
       res => {
         if (typeof res == "object") {
           alert("Done !")
           this.router.navigate(["/home"])
           localStorage.setItem("token" , res.token)
         } else {
           alert(res)
         }
       }
     )
  }

  isLogged(){
    if (this.userService.isLogged()) {
      this.router.navigate(["/home"])
    }
  }

}