import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/Services/Washer/profile/profile.service';

@Component({
  selector: 'app-washerprofile',
  templateUrl: './washerprofile.component.html',
  styleUrls: ['./washerprofile.component.css']
})
export class WasherprofileComponent implements OnInit {

  nameError= '';
  mobileError ='';
  userError ='';
  details=[];
  showMsg: boolean;
  message = "Profile created successfully";

  constructor(private _profileService: ProfileService) { }

  ngOnInit(): void {
    this.showMsg =false;
    this._profileService.getProfile()
      .subscribe(
        res => this.details.push(res),
        err=> console.log(err)
  
      )
  }


  /* Create new profile */
  submitProfileData(data){
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
 
    this._profileService.createProfile(profiledata)
      .subscribe(
        res => {
          this.showMsg = true;
        },
        err => {
          this.nameError = err.error.name,
          this.mobileError= err.error.mobile,
          this.userError= err.error.userId,
          console.log(err);
          
        }
      )
    

  }
}
