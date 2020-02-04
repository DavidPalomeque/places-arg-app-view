import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router , CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(public userService : UserService , public router : Router){ }

  canActivate():boolean{
    if (this.userService.isLogged()) {
      return true
    } else {
      alert("You have to be logged for see this content !")
      this.router.navigate(["/login"])
      return false
    }
  }

}
