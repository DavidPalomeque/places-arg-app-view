import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {

  constructor(public userService : UserService , public router : Router){ }

  logout(){
    if (confirm("Are you sure that you want to get out of the App ?")) {
      localStorage.removeItem("token")
      this.router.navigate(["/getstarted"])
    }
  }

}
