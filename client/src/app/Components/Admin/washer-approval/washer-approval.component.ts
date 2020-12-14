import { Component, OnInit } from '@angular/core';
import { WasherapprovalService } from 'src/app/Services/Admin/washerApproval/washerapproval.service';

@Component({
  selector: 'app-washer-approval',
  templateUrl: './washer-approval.component.html',
  styleUrls: ['./washer-approval.component.css']
})
export class WasherApprovalComponent implements OnInit {

  washers=[];
  constructor(private _washerApprovalService : WasherapprovalService) { }

  ngOnInit() {
    this.washers=[];
    this._washerApprovalService.getUnapprovedWashers()
        .subscribe(
          res => this.washers = res,
          err => console.log(err)
        )
  }

  updateWasher(id) {
    this._washerApprovalService.updateWasher(id)
      .subscribe(
        res => {
          console.log(res),
          this.ngOnInit()
        },
        err => console.log(err) 
      )
  }

  rejectWasher(id) {
    this._washerApprovalService.rejectWasher(id)
    .subscribe(
      res => {
        console.log(res),
        this.ngOnInit()
      },
      err => console.log(err) 
    )
  }

}
