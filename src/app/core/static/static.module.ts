import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngx Bootstrap 4
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { StaticRoutingModule } from './static-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { OnBoardingComponent } from './components/on-boarding/on-boarding.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, PrivacyComponent, OnBoardingComponent],
  imports: [
    CommonModule,
    StaticRoutingModule,
    CarouselModule.forRoot()
  ]
})
export class StaticModule { }
