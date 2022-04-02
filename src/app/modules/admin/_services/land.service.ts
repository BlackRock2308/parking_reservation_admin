import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParkingPlace } from 'src/app/models/parking_place';

 const API_URL = 'http://localhost:8080/api/v1';


@Injectable({
  providedIn: 'root'
})
export class LandService {

  constructor(private http : HttpClient) { }

  getParkingPlaces(): Observable<ParkingPlace[]> {
    return this.http.get<any[]>(`${API_URL}/places`);
  }

}
