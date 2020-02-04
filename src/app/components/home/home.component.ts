import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService : UserService , public router : Router) { }

  ngOnInit() { }

  logout(){
    if (confirm("Are you sure that you want to get out of the App ?")) {
      localStorage.removeItem("token")
      this.router.navigate(["/getstarted"])
    }
  }

}
