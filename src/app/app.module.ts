import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooternavComponent } from './footernav/footernav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { SocialFooterComponent } from './social-footer/social-footer.component';
import { HomeLayoutComponent } from './Layout/home-layout/home-layout.component';
import { SecondLayoutComponent } from './Layout/second-layout/second-layout.component';
import { ThirdLayoutComponent } from './Layout/third-layout/third-layout.component';
import { SecondLayoutSocialFooterComponent } from './second-layout-social-footer/second-layout-social-footer.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { FirstLayoutComponent } from './Layout/first-layout/first-layout.component';
import { FourthLayoutComponent } from './Layout/fourth-layout/fourth-layout.component';
import { Body2Component } from './body2/body2.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { Navbar3Component } from './navbar3/navbar3.component';
import { Body3Component } from './body3/body3.component';
import { Body4Component } from './body4/body4.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { CarouselBody3Component } from './carousel-body3/carousel-body3.component';
import { VerticalCardComponent } from './vertical-card/vertical-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooternavComponent,
    SocialFooterComponent,
    SecondLayoutSocialFooterComponent,
    LogInFormComponent,
    HomeLayoutComponent,
    FirstLayoutComponent,
    SecondLayoutComponent,
    ThirdLayoutComponent,
    FourthLayoutComponent,
    NavbarComponent,
    Navbar2Component,
    Navbar3Component,
    BodyComponent,
    Body2Component,
    Body3Component,
    Body4Component,
    UserInfoComponent,
    CarouselBody3Component,
    VerticalCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
