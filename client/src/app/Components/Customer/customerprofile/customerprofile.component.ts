import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/Services/Customer/profile/profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

  nameError= '';
  mobileError ='';
  userError ='';
  cars =[];
  showMsg: boolean=false;
  message = "Profile created successfully";
  constructor(private _profileService : ProfileService, private router : Router) { }

  details=[];
  ngOnInit(): void {
    this.showMsg=false;
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

  submitProfileData(data){
    console.log(data.value.car.split(',')[0]);
    
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
    
    this._profileService.postProfile(profiledata)
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
