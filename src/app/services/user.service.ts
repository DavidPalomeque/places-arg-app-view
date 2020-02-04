import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(public http : HttpClient , public router : Router) { }

  URL_API = "https://places-arg-app-server.herokuapp.com"
  // URL_API = "http://localhost:3029"

  registration(userData){
    return this.http.post<any>(this.URL_API + "/registration" , userData)
  }

  login(userData){
    return this.http.post<any>(this.URL_API + "/login" , userData)
  }

  isLogged(){
    return !!localStorage.getItem("token")
  }

  logout(){
    localStorage.removeItem("token")
    this.router.navigate(["/homepage"])
  }

}