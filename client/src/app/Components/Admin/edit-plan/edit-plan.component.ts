import { Component, OnInit } from '@angular/core';
import { PlanManagementService } from 'src/app/Services/Admin/planManagement/plan-management.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.css']
})
export class EditPlanComponent implements OnInit {

  id; plan=[];
  showMsg: boolean;
  nameError: string;
  message ='Plan details upadated successfully';
  constructor(private _planService: PlanManagementService, 
              private route: ActivatedRoute,
              private location : Location) { }

  ngOnInit(): void {
    this.plan =[];
    this.showMsg = false;
    this.nameError ='';
    this.id = this.route.snapshot.paramMap.get('id');
    this._planService.getplan(this.id)
      .subscribe(
        res => {this.plan.push(res), console.log(res)
        },
        err => console.log(err)
      )
  }

  /* update the plan */
  updatePlan(data) {
    this.showMsg = false;
    this.nameError ='';
    this._planService.updateService(data.value,this.id)
      .subscribe(
        res => {
          this.ngOnInit(),
          this.showMsg = true
        },
        err => this.nameError = err.error.name
      )

  }

  cancel() {
    this.location.back();
  }

}
