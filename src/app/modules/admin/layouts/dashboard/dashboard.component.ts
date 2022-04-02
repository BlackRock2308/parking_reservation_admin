import { Component, OnInit } from '@angular/core';
import { LandService } from '../../_services/land.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ParkingPlace } from 'src/app/models/parking_place';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public places : ParkingPlace[] = [];
  public nbrePlacesOcuppe! : number;

   // Pagination parameters.
   p: number = 1;
   count: number = 3;
  
  constructor(private landService : LandService) { }

  ngOnInit(): void {

    this.getPlaces();

    this.landService.getParkingPlaces().subscribe(
      (response : ParkingPlace[])=> {
        this.places = response;
        this.nbrePlacesOcuppe = this.places.length ;
      }
    );
   
  }

  public getPlaces(): void{
    
    this.landService.getParkingPlaces().subscribe(
      (response : ParkingPlace[])=> {
        this.places = response;
        console.log(this.places);
      },
      (error : HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

 

}

