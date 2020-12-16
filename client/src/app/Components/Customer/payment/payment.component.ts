import { Component, OnInit, AfterViewChecked } from '@angular/core';

declare let paypal : any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements AfterViewChecked{
  
  addScript: boolean = false;
  paypalLoad : boolean = true;
  finalAmount : number;

  paypalConfig ={
    env :'sandbox',
    client :{
      sandbox :''
    },
    commit: true,
    payment :(data, actions) =>{
      return actions.payment.create({
        payment :{
          transactions :[
            {amount : {total : this.finalAmount, currency : 'INR' }}
          ]
        }
      })
    },
    onAuthorize : (data, actions) =>{
      return actions.payment.execute().then((payment) =>{
        //do something
      })
    }
  };
 
  ngAfterViewChecked() : void {
    if(!this.addScript){
      this.addPaypalScript().then(()=>{
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
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

  constructor(){}
 
  ngOnInit(): void {
    
  }
 
  
}


