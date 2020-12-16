import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';


import { OrderService } from 'src/app/Services/Customer/order/order.service';
import { ProfileService } from 'src/app/Services/Customer/profile/profile.service';
import { PlansService } from 'src/app/Services/plans/plans.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  profileDetails =[];
  service ='';
  addon='';
  selectedWasher;
  cost:number;
  isScheduledlater;
  isVisible: boolean ;
  washersList =[];
  addOns =[];
  plans =[];
  showMsg : boolean ;
  successMsg ='Your order has been booked.'
  constructor(private _orderService : OrderService, 
              private _profileService : ProfileService,
              private _plansService : PlansService,
              private _router : Router) { }

  ngOnInit(): void {
    this.isVisible = false;
    this.profileDetails=[];
    this.addOns =[];
    this.plans =[];
    this.washersList =[];
    this.showMsg = false;
    this._profileService.getProfile()
      .subscribe(
        res => {
          this.profileDetails.push(res), 
          console.log(this.profileDetails[0]);
        },
        err => console.log(err)
      )

    this._plansService.services()
        .subscribe(
          res => {this.plans.push(res),console.log(this.plans)
          },
          err => console.log(err)
      )

    this._orderService.getWashers()
          .subscribe(
            res => this.washersList.push(res),
            err => console.log(err)
          )
  }

  /* Find addons by service name */
  findAddons(service){
    this.addOns=[];
    let plan = service.split(',')[0].toLowerCase();
    this._orderService.getAddons(plan)
      .subscribe(
        res => {
          this.addOns.push(res),
          this.isVisible= true;
        },
        err => console.log(err)
      )
  }

  /* Show total of order */
  submitOrder(data){

    /* Finding total cost */
    let servicecost=this.service.split(',')[1];
    let addon = this.addon.split(',')[1];
    this.cost = parseInt(servicecost) + (isNaN(parseInt(addon))?0 : parseInt(addon));


    /* Constructing the order object from details */
    const orderDetails = {
      userDetails:{
        userId : this.profileDetails[0][0].userId,
        name : this.profileDetails[0][0].name,
        mobile : this.profileDetails[0][0].mobile
      },
      address :{
        country: this.profileDetails[0][0].addresses.country,
        city: this.profileDetails[0][0].addresses.city,
        address : this.profileDetails[0][0].addresses.address,
        zipcode : this.profileDetails[0][0].addresses.zipcode
      },
      package: this.service.split(',')[0],
      addOn : this.addon.split(',')[0],
      carInfo :{
        carName : this.profileDetails[0][0].car.carName,
        carModel : this.profileDetails[0][0].car.carModel
      },
      dateTime :data.value.dateTime,
      washerDetails :{
        washerId: this.selectedWasher.userId,
        name: this.selectedWasher.name,
        mobile: this.selectedWasher.mobile,
        address: {
          country: this.selectedWasher.addresses.country,
          city: this.selectedWasher.addresses.city,
          address : this.selectedWasher.addresses.address,
          zipcode : this.selectedWasher.addresses.zipcode
        }
      },
      totalCost : this.cost,
      isScheduledLater : (this.isScheduledlater==='true'),
      instructionByUser :data.value.instruction
    }  


    this._orderService.createOrder(orderDetails)
      .subscribe(
        res => {
          console.log(res)
          this.showMsg = true;
        },
        err => console.log(err)
      )
    //this.toastr.success('Hello world!', 'Toastr fun!');
    data.reset();
    
    
  }

  /* Create a new Order */
  createOrder(details){
    console.log(details);
  }

}
