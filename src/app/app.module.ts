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

@NgModule({
  declarations: [
    AppComponent,
    FooternavComponent,
    NavbarComponent,
    BodyComponent,
    SocialFooterComponent,
    HomeLayoutComponent,
    SecondLayoutComponent,
    ThirdLayoutComponent,
    SecondLayoutSocialFooterComponent,
    LogInFormComponent,
    FirstLayoutComponent,
    FourthLayoutComponent,
    Body2Component,
    Navbar2Component,
    Navbar3Component,
    Body3Component,
    Body4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
