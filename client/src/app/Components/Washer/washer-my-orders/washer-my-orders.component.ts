import { Component, OnInit } from '@angular/core';
import { WasherMyorderService } from 'src/app/Services/Washer/myorders/washer-myorder.service';
import { WashrequestService } from 'src/app/Services/Washer/washrequests/washrequest.service';


@Component({
  selector: 'app-washer-my-orders',
  templateUrl: './washer-my-orders.component.html',
  styleUrls: ['./washer-my-orders.component.css']
})
export class WasherMyOrdersComponent implements OnInit {

  accepted=['as'];
  inprocess=[];
  completedAndPaid=[];
  completedAndUnpaid =[];
  cancelled=[];

  constructor(private _myorderservice : WasherMyorderService,
              private _orderservice : WashrequestService) { }

  ngOnInit(): void {
    this.accepted =[]
    this.inprocess=[];
    this.completedAndPaid=[];
    this.completedAndUnpaid =[];
    this.cancelled=[];
    this._myorderservice.acceptedOrders()
      .subscribe(
        res=> this.accepted = res,
        err=>console.log(err)
      )

    this._myorderservice.inprocessOrders()
      .subscribe(
        res=> this.inprocess= res,
        err=>console.log(err)
      )

    this._myorderservice.completedAndPaidOrders()
      .subscribe(
        res=> this.completedAndPaid=res,
        err=>console.log(err)
      )

    this._myorderservice.completedAndUnpaidOrders()
      .subscribe(
        res=> this.completedAndUnpaid=res,
        err=>console.log(err)
      )

    this._myorderservice.cancelledOrders()
      .subscribe(
        res=> this.cancelled=res,
        err=>console.log(err)
      )
  }

  /* Cancelling a order */
  cancelRequest(orderId){
    this._orderservice.rejectRequest(orderId)
      .subscribe(
        res => {console.log(res), this.ngOnInit()},
        err =>console.log(err)
      )
  }

  /* Changing status of order to in-process */
  inprocessRequest(orderId){
    this._orderservice.inprocessOrder(orderId)
      .subscribe(
        res => {console.log(res), this.ngOnInit()},
        err =>console.log(err)
      )
  }

  /* Changing status of order to completed */
  completedOrder(orderId){
    this._orderservice.completedOrder(orderId)
      .subscribe(
        res =>{console.log(res), this.ngOnInit()},
        err =>console.log(err)
      )
  }


}
