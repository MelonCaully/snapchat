import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooternavComponent } from './footernav/footernav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { SocialFooterComponent } from './social-footer/social-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooternavComponent,
    NavbarComponent,
    BodyComponent,
    SocialFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
