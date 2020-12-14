import { Component, OnInit } from '@angular/core';
import { AddonManagementService } from 'src/app/Services/Admin/addonsManagement/addon-management.service';

@Component({
  selector: 'app-addon-management',
  templateUrl: './addon-management.component.html',
  styleUrls: ['./addon-management.component.css']
})
export class AddonManagementComponent implements OnInit {

  addons=[];
  constructor(private _addonSerice : AddonManagementService) { }

  ngOnInit(): void {
    this.addons =[];
    this._addonSerice.getAddons()
        .subscribe(
          res => this.addons.push(res),
          err => console.log(err)
        )
  }

  deleteAddon(id){
    this._addonSerice.deleteAddon(id)
      .subscribe(
        res => this.ngOnInit(),
        err => console.log(err)
      )
  }

}
