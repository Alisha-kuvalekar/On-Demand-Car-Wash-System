import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanManagementService } from 'src/app/Services/Admin/planManagement/plan-management.service';

@Component({
  selector: 'app-plans-management',
  templateUrl: './plans-management.component.html',
  styleUrls: ['./plans-management.component.css']
})
export class PlansManagementComponent implements OnInit {

  plans= []
  constructor(private router : Router,private _planService : PlanManagementService) { }

  ngOnInit() {
    this.plans =[];
    this._planService.getPlans()
      .subscribe(
        res => this.plans.push(res),
        err =>console.log(err)
      )

    }

    /* Delete a plan */
    deletePlan(id) {
      this._planService.deleteService(id)
        .subscribe(
          res => this.ngOnInit(),
          err => console.log(err)
        )
    }

    

}
