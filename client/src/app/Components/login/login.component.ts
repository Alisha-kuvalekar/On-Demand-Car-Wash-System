import { Component, OnInit } from '@angular/core';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {Router} from '@angular/router';
import { faUserAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = faUserAlt;
  envelope = faEnvelope;
  constructor(private router : Router) { }

  ngOnInit(): void {
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
 
}
