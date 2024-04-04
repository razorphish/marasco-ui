import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';
import { CallToAction1Component } from '../call-to-action-1/call-to-action-1.component';
import { FeaturesComponent } from '../features/features.component';
import { ServicesComponent } from '../services/services.component';
import { FeaturedProjectsComponent } from '../featured-projects/featured-projects.component';
import { TeamComponent } from '../team/team.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { CallToAction2Component } from '../call-to-action-2/call-to-action-2.component';
import { ClientsComponent } from '../clients/clients.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  standalone: true,
  selector: 'ma-main-layout',
  templateUrl: 'main-layout.component.html',
  styleUrls: ['main-layout.component.css'],
  imports: [
    NavigationComponent,
    HeaderComponent,
    CallToAction1Component,
    FeaturesComponent,
    ServicesComponent,
    FeaturedProjectsComponent,
    TeamComponent,
    PortfolioComponent, 
    CallToAction2Component,
    ClientsComponent,
    ContactUsComponent,
    FooterComponent
  ]
})
export class MainLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
