import { Component, OnInit } from '@angular/core';
import { DistanceCalcService } from "./../distance-calc.service";
import { from } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  custData;
  officeRadLatLng: Array<number> = [];
  nearByCust: Array<number> = [];

  ngOnInit() {
    this.distanceService.getJSON().subscribe(data =>{
      this.custData = data;
      this.invitedCustomers();
    });
  }

  constructor(private distanceService: DistanceCalcService) {}

  calDistanceFromOffice(cust) {
    let custLatLong = this.distanceService.convertDegreeToRadians(cust.latitude, cust.longitude);
    let lat1 = custLatLong[0],
        long1 = custLatLong[1],
        lat2 = this.officeRadLatLng[0],
        long2 = this.officeRadLatLng[1];

    let distanceInMiles = 3963.0 * Math.acos((Math.sin(lat1) * Math.sin(lat2)) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(long2 - long1));
    let distanceInKm = 1.609344 * distanceInMiles;
    return distanceInKm;
  }

  invitedCustomers() {
    this.officeRadLatLng = this.distanceService.dOfficeLatLngCnvrtDegreeToRadians();
    this.nearByCust = [];
    this.custData.forEach(cust => {
      var dist = this.calDistanceFromOffice(cust);
      if(dist < 100) {
        this.nearByCust.push(cust);
      }
    });
  }

}
