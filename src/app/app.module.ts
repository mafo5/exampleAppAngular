import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DesignModule } from '@example-app-angular/design';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }