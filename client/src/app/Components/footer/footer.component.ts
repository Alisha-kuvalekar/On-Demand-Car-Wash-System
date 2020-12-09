import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGoogle, faPinterest } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebookIcon = faFacebook;
  twitterIcon = faTwitter;
  instagramIcon = faInstagram;
  pinterestIcon = faPinterest;
  linkedinIcon = faLinkedin;
  googleIcon = faGoogle;

  constructor() { }

  ngOnInit(): void {
  }

}
