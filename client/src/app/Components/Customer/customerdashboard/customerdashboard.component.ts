import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  status: boolean = false;
  barsIcon = faBars;
  constructor(private router : Router) { }

  ngOnInit(): void {

  }

  toggleClass(){
    this.status =!this.status;
  }
}
