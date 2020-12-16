import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { MyorderService } from 'src/app/Services/Customer/myorder/myorder.service';
import { OrderService } from 'src/app/Services/Customer/order/order.service';
import {paypalClientId} from './config';
import { FormsModule } from '@angular/forms';

declare let paypal : any;

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit, AfterViewChecked {

  accepted=[];
  pending=[];
  inprocess=[];
  completedPaid=[];
  completedUnpaid=[];
  cancelled=[];

  /* for Paypal  */
  addScript: boolean = false;
  paypalLoad : boolean = true;
  data={
    id : String,
    package : String,
    addOn : String,
    washername : String,
    cost : Number
  };
  finalAmount: number;
  showButton : boolean = true;


  constructor(private _myorderService : MyorderService,
              private _orderService : OrderService) { }

  ngOnInit(): void {
    this.accepted = [],
    this.pending =  [],
    this.inprocess= [],
    this.completedPaid =[],
    this.completedUnpaid=[]
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

    this._myorderService.getCompletedAndPaidOrders()
      .subscribe(
        res => this.completedPaid = res,
        err => console.log(err)   
      )
    
    this._myorderService.getCompletedAndUnpaidOrders()
      .subscribe(
        res => this.completedUnpaid = res,
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

  /* Paypal integration */
  
  paypalConfig ={
    env :'sandbox',
    client :{
      sandbox : 'AYAFAQWon6_Na1vnDJ53vaiToeowOhO7y05s273owMfQq2FnXhIpxg75men_sX-2jcejsQU324zu_yDm'
    },
    commit: true,
    payment :(data, actions) =>{
      return actions.payment.create({
        payment :{
          transactions :[
            {amount : {total : this.finalAmount, currency : 'USD' }}
          ]
        }
      })
    },
    onAuthorize : (data, actions) =>{
      return actions.payment.execute().then((payment) =>{
        //do something
        console.log(this.data.id)
        /* Change the payment status to done for the order */
        this._myorderService.changePaymentStatus(this.data.id)
          .subscribe(
            res => console.log(res),
            err => console.log(err)
          )
          
        /* Incrementing the wash count for the customer */
        this._orderService.increaseWashCount()
            .subscribe(
              res=> console.log(res),
              err=> console.log(err)
            )
      })
    }
  };
 
  ngAfterViewChecked() : void {
    if(!this.addScript){
      this.addPaypalScript().then(()=>{
        paypal.Button.render(this.paypalConfig, '.paypal-checkout-btn');
        this.paypalLoad = false;

      })
    }
  }

  addPaypalScript(){
    this.addScript = true;
    return new Promise((resolve, reject)=>{
      let scriptagElement = document.createElement('script');
      scriptagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptagElement.onload = resolve;
      document.body.appendChild(scriptagElement);
    })
  }

  orderData(data) {
      this.data.id = data._id;
      this.data.package = data.package;
      this.data.addOn = data.addOn;
      this.data.washername = data.washerDetails.name;
      this.data.cost = data.totalCost; 
      this.finalAmount = data.totalCost;
      
  }

}
