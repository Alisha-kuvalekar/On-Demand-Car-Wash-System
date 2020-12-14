import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  status: boolean = false;
  barsIcon = faBars;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  toggleClass(){
    this.status =!this.status;
  }

}
