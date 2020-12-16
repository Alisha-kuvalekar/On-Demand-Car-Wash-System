import { Component, OnInit } from '@angular/core';
import { WashrequestService } from 'src/app/Services/Washer/washrequests/washrequest.service';

@Component({
  selector: 'app-washrequests',
  templateUrl: './washrequests.component.html',
  styleUrls: ['./washrequests.component.css']
})
export class WashrequestsComponent implements OnInit {

  requests=[];
  constructor(private WashrequestService: WashrequestService) { }
  
  ngOnInit(): void {
    this.requests=[];
    this.WashrequestService.getPendingRequests()
      .subscribe(
        res => this.requests = res,
        err => console.log(err)
      )
 
  }

  /* Accept a request */
  acceptRequest(orderId){
    this.WashrequestService.acceptRequest(orderId)
      .subscribe(
        res=> {console.log(res), this.ngOnInit()},
        err=> console.log(err)
      )
  }

  /* Reject a request */
  rejectRequest(orderId){
    this.WashrequestService.rejectRequest(orderId)
      .subscribe(
        res=> this.ngOnInit(),
        err=> console.log(err)
      )
  }

}
