import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  providers: [PlaceService]
})
export class PlacesComponent implements OnInit {

  constructor(public placeService : PlaceService , public router : Router) { }

  show = 1;
  getOnePlace ;
  places ;
  ngOnInit() {
     this.getAllPlaces()
   }

  getAllPlaces(){
    this.placeService.getAllPlaces()
     .subscribe(
       res => {
         this.places = res.places
       },
       err => {
         console.log(err)
       }
     )
  }

  getOneById(_id){
    this.placeService.getOneById(_id)
     .subscribe(
       res => {
         this.show = 2
         this.getOnePlace = res.place
       },
       err => {
         console.log(err)
       }
     )
  }

  reloadPage(){
    this.show = 1;
    this.router.navigate(["/places"])
  }

}