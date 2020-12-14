import { Component, OnInit } from '@angular/core';
import { CarManagementService } from 'src/app/Services/Admin/carsManagement/car-management.service';

@Component({
  selector: 'app-cars-management',
  templateUrl: './cars-management.component.html',
  styleUrls: ['./cars-management.component.css']
})
export class CarsManagementComponent implements OnInit {

  cars=[];
  constructor(private _carService: CarManagementService) { }

  ngOnInit() {
    this.cars=[];
    this._carService.getCars()
      .subscribe(
        res => this.cars.push(res),
        err => console.log(err)
      )
  }


  deleteCar(id){
    this._carService.deleteCar(id)
      .subscribe(
        res => this.ngOnInit(),
        err => console.log(err)
      )
  }

}
