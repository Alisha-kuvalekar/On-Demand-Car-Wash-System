import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddonManagementService } from 'src/app/Services/Admin/addonsManagement/addon-management.service';
import { PlansService } from 'src/app/Services/plans/plans.service';

@Component({
  selector: 'app-create-addon',
  templateUrl: './create-addon.component.html',
  styleUrls: ['./create-addon.component.css']
})
export class CreateAddonComponent implements OnInit {

  plans= [];
  nameError ='';
  showMsg : boolean;
  message = "Addon Created Successfully";

  
  constructor(private _planService : PlansService,
              private _addonService : AddonManagementService,
              private location: Location) { }

  ngOnInit(): void {
    this.plans=[];
    this.showMsg= false;

    /* Getting list of plans for selection */
    this._addonService.getActivePlans()
      .subscribe(
        res => this.plans.push(res),
        err => console.log(err)
      )
  }


  /* create a new addon */
  createAddon(data) {
    this.showMsg = false;
    this.nameError = '';
    this._addonService.createAddon(data.value)
      .subscribe(
        res => {
          /* Show the success message */
          this.showMsg = true
        },
        /* Show unique name error in form */
        err => this.nameError= err.error.name
      )
  }

  /* Go back to addons list page */
  cancel() {
    this.location.back();
  }

}
