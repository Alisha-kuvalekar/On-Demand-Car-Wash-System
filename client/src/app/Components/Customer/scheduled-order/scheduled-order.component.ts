import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/Customer/order/order.service';

@Component({
  selector: 'app-scheduled-order',
  templateUrl: './scheduled-order.component.html',
  styleUrls: ['./scheduled-order.component.css']
})
export class ScheduledOrderComponent implements OnInit {

  scheduled=[];
  constructor(private _orderService: OrderService) { }

  ngOnInit(): void {
    this._orderService.getScheduledWashes()
      .subscribe(
        res =>{
          this.scheduled.push(res),
          console.log(res)
        },
        err => console.log(err)
      )
  }

  cancelOrder(order){
    this._orderService.cancelOrder(order._id)
      .subscribe(
        res=> {
          console.log(res)
          
        },
        err =>{
          console.log(err)
          
        }
      )
  }

}
