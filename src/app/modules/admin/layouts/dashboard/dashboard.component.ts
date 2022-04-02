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
  public editParkingPlace!: ParkingPlace;
  public deleteParkingPlace!: ParkingPlace;

   // Pagination parameters.
   p: number = 1;
   count: number = 6;
  
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

  public onUpdateParkingPlace(place: ParkingPlace): void {
    console.log(place);
    this.landService.updateParkingPlace(place).subscribe(
      (response: ParkingPlace) => {
        console.log(response);
        this.getPlaces();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteParkingPlace(parkingPlaceId: number): void {
    this.landService.deleteParkingPlace(parkingPlaceId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPlaces();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(parkingPlace: ParkingPlace, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editParkingPlace = parkingPlace;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteParkingPlace = parkingPlace;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container!.appendChild(button);
    button.click();
  }


 

}

