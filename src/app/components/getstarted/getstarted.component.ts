import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css'],
  providers: [UserService]
})
export class GetstartedComponent implements OnInit {

  constructor(public userService : UserService , public router : Router) { }

  ngOnInit() {
    this.isLogged()
  }

  isLogged(){
    if (this.userService.isLogged()) {
      this.router.navigate(["/home"])
    }
  }
  
}