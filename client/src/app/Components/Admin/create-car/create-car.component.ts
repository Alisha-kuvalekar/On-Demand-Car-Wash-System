import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { CarManagementService } from 'src/app/Services/Admin/carsManagement/car-management.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  /* Variables */
  modelError ='';
  showMsg: boolean;
  message = "New car created successfully";

  constructor(private router: Router,
              private _carService :  CarManagementService,
              private location : Location) { }

  ngOnInit(): void {
    this.showMsg =false;
    this.modelError ='';
  }

  /* Create new car */
  createCar(data){
    this.showMsg = false;
    this.modelError = '';
    this._carService.createCar(data.value)
        .subscribe(
          /* Show the success message */
          res => this.showMsg =true,
          /* Display error in console */
          err => this.modelError = err.error.model
        )
  }

  /* Go back to cars list page */
  cancel() {
    this.location.back();
  }

}
