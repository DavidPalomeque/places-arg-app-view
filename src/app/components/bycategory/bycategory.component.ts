import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-bycategory',
  templateUrl: './bycategory.component.html',
  styleUrls: ['./bycategory.component.css'],
  providers: [PlaceService]
})
export class BycategoryComponent implements OnInit {

  constructor(public placeService : PlaceService , public router : Router) { }

  show = 1;
  getOnePlace ;
  places = []
  ngOnInit() { }

  // GET ALL PLACES BY CATEGORY
  getAllByCategory(category){ 
    this.placeService.getAllByCategory(category)
     .subscribe(
       res => {
         this.places = res.places
       },
       err => {
         console.log(err)
       }
     )
  }

  // GET ONE PLACE BY ID
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

  // RELOAD PAGE FUNCTION
  reloadPage(){
    this.show = 1;
    this.router.navigate(["/bycategory"])
  }

}