import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarManagementService } from 'src/app/Services/Admin/carsManagement/car-management.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  /* Variables */
  modelError ='';
  CurrentCar=[];
  currentCarId;
  showMsg : boolean;
  message= "Car Details Updated Successfully"


  constructor(private router : Router,
              private route : ActivatedRoute,
              private location : Location,
              private _carService : CarManagementService) { }

  ngOnInit(): void {
    this.CurrentCar =[];
    this.showMsg = false;

    /* Get current car Id */
    this.currentCarId = this.route.snapshot.paramMap.get('id');
    /* Get current car details */
    this._carService.getCar(this.currentCarId)
      .subscribe(
        res => {
          this.CurrentCar.push(res),
          console.log(this.CurrentCar[0])
        },
        err => console.log(err)
      )
  }

  /* Update car details */
  updateCar(data){
    this.showMsg =false;
    this.modelError = '';
    this._carService.updateCar(data.value, this.currentCarId)
      .subscribe(
        /* show the success message */
        res => this.showMsg = true,
        err => this.modelError = err.error.model
      )
  }

  /* Go back to cars list page */
  cancel() {
    this.location.back();
  }

}
