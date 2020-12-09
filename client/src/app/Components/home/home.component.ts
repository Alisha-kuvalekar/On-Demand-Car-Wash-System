import { Component, OnInit } from '@angular/core';
import { faShippingFast, faBoxOpen, faTint, faClipboardCheck,faRupeeSign,faClock,faWallet,faChartLine, faPhone, faEnvelope, faMapMarkerAlt} from'@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /* Icons */
  fastShippingIcon = faShippingFast;
  boxopenIcon = faBoxOpen;
  dropIcon = faTint;
  clipboardIcon = faClipboardCheck;
  rupeeIcon = faRupeeSign;
  clockIcon = faClock;
  walletIcon = faWallet;
  growthIcon = faChartLine;
  mobile = faPhone;
  envelope = faEnvelope;
  marker = faMapMarkerAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
