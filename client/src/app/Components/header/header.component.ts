import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { AdminAuthServiceService } from 'src/app/Services/Admin/auth/admin-auth-service.service';
import { AuthServiceService } from 'src/app/Services/Customer/auth/auth-service.service';
import { AuthService } from 'src/app/Services/Washer/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCarIcon = faCar;
  constructor(private router : Router, 
              public  _auth : AuthServiceService, 
              public _washerauth : AuthService,
              public _adminauth : AdminAuthServiceService) { };

  ngOnInit(): void {
  }

}
