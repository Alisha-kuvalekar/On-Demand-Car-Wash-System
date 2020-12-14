import { Component, OnInit } from '@angular/core';
import { MyorderService } from 'src/app/Services/Customer/myorder/myorder.service';
import { OrderService } from 'src/app/Services/Customer/order/order.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  accepted=[];
  pending=[];
  inprocess=[];
  completed=[];
  cancelled=[];

  constructor(private _myorderService : MyorderService,
              private _orderService : OrderService) { }

  ngOnInit(): void {
    this.accepted =[],
    this.pending =[],
    this.inprocess=[],
    this.completed =[],
    this.cancelled =[],

    this._myorderService.getAcceptedOrders()
      .subscribe(
        res => this.accepted = res,
        err => console.log(err)   
      )

    this._myorderService.getPendingOrders()
      .subscribe(
        res => this.pending = res,
        err => console.log(err)   
      )

    this._myorderService.getInprocessOrders()
      .subscribe(
        res => this.inprocess = res,
        err => console.log(err)   
      )

    this._myorderService.getCompletedOrders()
      .subscribe(
        res => this.completed = res,
        err => console.log(err)   
      )
      
    this._myorderService.getCancelledOrders()
      .subscribe(
        res => this.cancelled = res,
        err => console.log(err)   
      )
  }


  cancelOrder(orderId){
    this._orderService.cancelOrder(orderId) 
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
