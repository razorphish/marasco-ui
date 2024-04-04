import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAws, faAmazon } from '@fortawesome/free-brands-svg-icons';
import {faCloud} from '@fortawesome/free-solid-svg-icons'
@Component({
  standalone: true,
  selector: 'ma-features',
  templateUrl: 'features.component.html',
  styleUrls: ['features.component.css'],
  imports: [FontAwesomeModule]
})
export class FeaturesComponent implements OnInit {

  faAws = faAws;
  faWeb = faCloud;
  faAmazon = faAmazon;


  constructor() { }

  ngOnInit() {
  }

}
