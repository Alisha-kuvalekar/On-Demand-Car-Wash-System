import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { faBars} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-washerdashboard',
  templateUrl: './washerdashboard.component.html',
  styleUrls: ['./washerdashboard.component.css']
})
export class WasherdashboardComponent implements OnInit {

  barsIcon = faBars;
  status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleClass(){
    this.status =!this.status;
  }

}
