import { Component, OnInit } from '@angular/core';
import { WasherMyorderService } from 'src/app/Services/Washer/myorders/washer-myorder.service';
import { WashrequestService } from 'src/app/Services/Washer/washrequests/washrequest.service';

@Component({
  selector: 'app-washer-scheduled-orders',
  templateUrl: './washer-scheduled-orders.component.html',
  styleUrls: ['./washer-scheduled-orders.component.css']
})
export class WasherScheduledOrdersComponent implements OnInit {

  Scheduled=[];
  constructor( private _washerMyorderService: WasherMyorderService,
               private _orderService : WashrequestService) { }

  ngOnInit(): void {
    this.Scheduled=[];
    this._washerMyorderService.scheduledOrders()
      .subscribe(
        res => this.Scheduled = res,
        err => console.log(err)
      )
  }

  /* Reject a request */
  cancelRequest(orderId){
    this._orderService.rejectRequest(orderId)
      .subscribe(
        res=> console.log(res),
        err=> console.log(err)
      )
  }

  /* Changing status of order to in-process */
  inprocessRequest(orderId){
    this._orderService.inprocessOrder(orderId)
      .subscribe(
        res => console.log(res),
        err =>console.log(err)
      )
  }


}
