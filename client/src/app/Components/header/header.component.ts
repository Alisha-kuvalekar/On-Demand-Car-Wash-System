import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCarIcon = faCar;
  constructor(private router : Router) { };

  ngOnInit(): void {
  }

}
