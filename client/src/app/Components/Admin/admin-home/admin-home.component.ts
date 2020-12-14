import { Component, OnInit } from '@angular/core';
import { CustomercountService } from 'src/app/Services/Admin/customercount/customercount.service';
import { OrderscountService } from 'src/app/Services/Admin/orderCount/orderscount.service';
import { PlanManagementService } from 'src/app/Services/Admin/planManagement/plan-management.service';
import { WasherapprovalService } from 'src/app/Services/Admin/washerApproval/washerapproval.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  /* variables */
  activeServicesCount :number;
  customersCount: number;
  washersCount : number;
  completedordersCount : number;


  constructor(private _planService : PlanManagementService,
              private _WasherService : WasherapprovalService,
              private _customerService : CustomercountService,
              private _orderService : OrderscountService) { }

  ngOnInit() {
    this._planService.countServices()
        .subscribe(
          res => this.activeServicesCount = res,
          err => console.log(err)
        )

    this._WasherService.countWashers()
          .subscribe(
            res => this.washersCount = res,
            err => console.log(err)
          )

    this._customerService.customerCount()
          .subscribe(
            res => this.customersCount = res,
            err => console.log(err)
          )

    this._orderService.getCompletedOrdersCount()
            .subscribe(
            res => this.completedordersCount = res,
            err => console.log(err)
            )
          
  }

}
