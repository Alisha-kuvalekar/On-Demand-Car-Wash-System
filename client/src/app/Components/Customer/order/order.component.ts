import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  cost;
  isVisible: boolean ;
  washersList =[];
  addOns =[];
  plans =[];

  constructor(private _orderService : OrderService, 
              private _profileService : ProfileService,
              private _plansService : PlansService,
              private _router : Router) { }

  ngOnInit(): void {
    this.isVisible = false;
    this._profileService.getProfile()
      .subscribe(
        res => this.profileDetails.push(res),
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
  showSummary(){
    let servicecost=this.service.split(',')[1];
    let addon = this.addon.split(',')[1];
    this.cost = parseInt(servicecost) + parseInt(addon);
    
  }

  /* Create a new Order */
  createOrder(details){
    console.log(details);
  }

}
