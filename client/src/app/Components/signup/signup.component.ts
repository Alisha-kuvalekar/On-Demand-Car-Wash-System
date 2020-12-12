import { Component, OnInit } from '@angular/core';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { Router} from '@angular/router';
import { faUserAlt} from '@fortawesome/free-solid-svg-icons';
import { AuthServiceService } from 'src/app/Services/Customer/auth/auth-service.service';
import { AuthService } from 'src/app/Services/Washer/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = faUserAlt;
  envelope = faEnvelope;
  selected= "Customer";
  emailError ='';
  passwordError ='';
  showMessage = false;
  succcessMsg = 'Thanks for registration! You will notified via mail after the admin approval.';
  constructor(private router : Router, private _auth: AuthServiceService, private _washerAuth : AuthService) { }

  ngOnInit(): void {
    this.showMessage= false;
  }

  /* Show and hide password */
  showpass(x,text)
  {
    if (x.type === "password") {
      x.type = "text";
      text.text = "Hide"
    } else {
      text.text ="Show";
      x.type = "password";
    }
  }

  /* Register the user */
  register(customer)
  {
    this.emailError= ''; this.passwordError='';
    if(customer.value.role == 'Customer'){
      let user = { email: customer.value.email, password : customer.value.password};
      this._auth.registerCustomer(user)
      .subscribe(
        res => {
          localStorage.setItem('cjwt',res.token)
          this.router.navigate(['/customerDashboard/customerHome'])
        },
        err => {this.emailError =err.error.email, this.passwordError = err.error.password}
      )
    }

    if(customer.value.role == 'Washer'){
      let user = { email: customer.value.email, password : customer.value.password};
      this._washerAuth.registerWasher(user)
      .subscribe(
        res => {
          customer.reset();
          this.showMessage = true;
        },
        err => {
         this.emailError =err.error.email; 
          this.passwordError = err.error.password;
          console.log(err);
        }
      )
    }
     
  } 


}
