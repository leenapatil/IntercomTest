import { Injectable } from '@angular/core';
import { HttpClient }  from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';
import { Customer } from "./customer";

@Injectable({
  providedIn: 'root'
})
export class DistanceCalcService {

  constructor(private httpClient: HttpClient) {}

  convertDegreeToRadians(Latitude, Longitude) {
    let lat = Latitude / 57.29577951;
    let long = Longitude / 57.29577951
    return [lat, long];
  }

 //53.339428, -6.257664 - Dublin office lat long
  // Convert the latitude and longitude values from decimal degrees to radians.
  // For this divide the values of longitude and latitude of both the points by 180/pi. 
  // The value of pi is 22/7. The value of 180/pi is approximately 57.29577951. 
  dOfficeLatLngCnvrtDegreeToRadians() {
    return this.convertDegreeToRadians(53.339428, -6.257664);
  }

  getJSON() : Observable<Customer>{
    return this.httpClient.get("../assets/customers.json").pipe(map((response: Customer) => response));
  }
}
