import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(public http : HttpClient , public router : Router) { }

  URL_API = "https://places-arg-app-server.herokuapp.com"
  // URL_API = "http://localhost:3029"

  //GET ALL PLACES
  getAllPlaces(){
    return this.http.get<any>(this.URL_API + `/places`)
  }

  // GET ALL PLACES BY CATEGORY
  getAllByCategory(category){
    return this.http.get<any>(this.URL_API + `/category/${category}`)
  }
 
  //GET A PLACE BY ID
  getOneById(_id){
    return this.http.get<any>(this.URL_API + `/places/${_id}`)
  }

}