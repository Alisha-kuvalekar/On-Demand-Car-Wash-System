import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProfileService } from 'src/app/Services/Customer/profile/profile.service';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  nameError ='';
  mobileError='';
  message= "Profile details updated succesfully";
  showMsg : boolean;
  isDisabled: boolean =true;
  constructor(private location: Location,private _profileService: ProfileService) { }

  cars=[];
  details=[];
  ngOnInit(): void {
    this.showMsg= false;
    this.details=[];
    this._profileService.getProfile()
      .subscribe(
        res=>{
          this.details.push(res)
        },
        err => console.log(err)
      )

    this._profileService.getCarsList()
      .subscribe(
        res => {this.cars.push(res), console.log(this.cars[0]);
        },
        err => console.log(err)
      )
  }

  editProfileData(data){
    let profiledata ={ 
      name: data.value.name,
      mobile: data.value.mobile,
      car:{
        carName : data.value.car.split(',')[0],
        carModel: data.value.car.split(',')[1]
      },
      addresses:{
        country : data.value.country,
        city: data.value.city,
        address: data.value.address,
        zipcode: data.value.zipcode
      }
    }
    this._profileService.updateProfile(profiledata)
      .subscribe(
        res => {
          this.showMsg = true;
        },
        err=>{
          this.nameError = err.error.name,
          this.mobileError= err.error.mobile
        }
      )
    
  }

  cancel(){
    this.location.back();
  }

}
