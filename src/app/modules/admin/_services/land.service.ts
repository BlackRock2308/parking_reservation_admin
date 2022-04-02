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

  public getParkingPlaces(): Observable<ParkingPlace[]> {
    return this.http.get<any[]>(`${API_URL}/places`);
  }

  public updateParkingPlace(place: ParkingPlace): Observable<ParkingPlace> {
    return this.http.put<ParkingPlace>(`${API_URL}/places/update`, place);
  }

  public deleteParkingPlace(parkingPlaceId: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/places/${parkingPlaceId}`);
  }

}
