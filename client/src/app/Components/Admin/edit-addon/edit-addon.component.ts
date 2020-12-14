import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddonManagementService } from 'src/app/Services/Admin/addonsManagement/addon-management.service';

@Component({
  selector: 'app-edit-addon',
  templateUrl: './edit-addon.component.html',
  styleUrls: ['./edit-addon.component.css']
})
export class EditAddonComponent implements OnInit {

  /* Variables */
  plans =[];
  CurrentAddon=[];
  currentAddonId;
  nameError='';
  message = "Addon Updated Successfully";
  showMsg : boolean;

  constructor(private _addonService : AddonManagementService,
              private location: Location,
              private route: ActivatedRoute,
              private _planService : AddonManagementService) { }

  ngOnInit(): void {
    this.showMsg =false;
    this.plans=[];
    this.CurrentAddon =[];

    /* Get current addon id from URL */
    this.currentAddonId = this.route.snapshot.paramMap.get('id');

    /* Get list of plans for selelcting */
    this._planService.getActivePlans()
      .subscribe(
        res => this.plans.push(res),
        err => console.log(err)
      )

    /* Get info of current addon to edit */
    this._addonService.getAddon(this.currentAddonId)
        .subscribe (
          res => this.CurrentAddon.push(res),
          err => console.log(err)
        )
  }


  /* Update a addon */
  updateAddon(data){
    this.showMsg = false;
    this._addonService.updateAddon(data.value, this.currentAddonId)
      .subscribe(
        res => {
          this.showMsg = true
        },
        err => console.log(err)
      )
  }

  /* go back to addons list */
  cancel(){
    this.location.back();
  }

}
