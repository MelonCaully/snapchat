import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooternavComponent } from './footernav/footernav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { SocialFooterComponent } from './social-footer/social-footer.component';
import { LayoutComponent } from './home-page/layout/layout.component';
import { HomeLayoutComponent } from './Layout/home-layout/home-layout/home-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FooternavComponent,
    NavbarComponent,
    BodyComponent,
    SocialFooterComponent,
    LayoutComponent,
    HomeLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
