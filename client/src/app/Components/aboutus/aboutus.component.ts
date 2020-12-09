import { Component, OnInit } from '@angular/core';
import {  faHeart, faSignal, faDumbbell, faBriefcase,faLeaf, faCertificate,faCogs} from'@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  chartLine = faSignal;
  dumbell = faDumbbell;
  heart = faHeart;
  case = faBriefcase;
  leaf = faLeaf;
  certificate = faCertificate;
  cogs= faCogs;
  constructor() { }

  ngOnInit(): void {
  }

}
