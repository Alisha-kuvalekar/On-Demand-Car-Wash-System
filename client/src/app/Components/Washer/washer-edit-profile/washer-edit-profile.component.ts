import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProfileService } from 'src/app/Services/Washer/profile/profile.service';

@Component({
  selector: 'app-washer-edit-profile',
  templateUrl: './washer-edit-profile.component.html',
  styleUrls: ['./washer-edit-profile.component.css']
})
export class WasherEditProfileComponent implements OnInit {

  nameError= '';
  mobileError ='';
  message= "Profile details updated succesfully";
  showMsg : boolean;
  details=[];
  constructor(private _profileService : ProfileService, private location :  Location) { }

  ngOnInit(): void {
    this.showMsg = false;
    this.details=[];
    this._profileService.getProfile()
      .subscribe(
        res => this.details.push(res),
        err=> console.log(err)
  
      )
  }

  /* Go back to profile page */
  goBack() {
    this.location.back();
  }

  /* Update profile */
  updateProfileData(data) {
    let profiledata ={ 
      name: data.value.name,
      mobile: data.value.mobile,
      addresses:{
        country : data.value.country,
        city: data.value.city,
        address: data.value.address,
        zipcode: data.value.zipcode
      }
    }

    this._profileService.updateProfile(profiledata)
      .subscribe(
        res => this.showMsg = true,
        err =>{
          this.nameError = err.error.name,
          this.mobileError= err.error.mobile
        }
      )
  }

}
