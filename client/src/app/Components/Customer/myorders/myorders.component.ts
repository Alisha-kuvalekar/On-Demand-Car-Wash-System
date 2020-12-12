import { Component, OnInit } from '@angular/core';
import { MyorderService } from 'src/app/Services/Customer/myorder/myorder.service';

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

  constructor(private _myorderService : MyorderService) { }

  ngOnInit(): void {
    this._myorderService.getAcceptedOrders()
      .subscribe(
        res => this.accepted.push(res),
        err => console.log(err)   
      )

    this._myorderService.getPendingOrders()
      .subscribe(
        res => this.pending.push(res),
        err => console.log(err)   
      )

    this._myorderService.getInprocessOrders()
      .subscribe(
        res => this.inprocess.push(res),
        err => console.log(err)   
      )

    this._myorderService.getCompletedOrders()
      .subscribe(
        res => this.completed.push(res),
        err => console.log(err)   
      )
      
    this._myorderService.getCancelledOrders()
      .subscribe(
        res => this.cancelled.push(res),
        err => console.log(err)   
      )
  }

}
