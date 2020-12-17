import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DesignModule } from '@mafo5/ng-design';
import { NgRefModule } from '@mafo5/ng-ref';

import { AccountPageComponent } from './account-page/account-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengeListPageComponent } from './challenge-list-page/challenge-list-page.component';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { InfoComponent } from './info/info.component';
import { ItemComponent } from './item/item.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MemberListPageComponent } from './member-list-page/member-list-page.component';
import { MemberPageComponent } from './member-page/member-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageComponent } from './page/page.component';
import { PostChallengePageComponent } from './post-challenge-page/post-challenge-page.component';
import { SessionFeedbackPageComponent } from './session-feedback-page/session-feedback-page.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionListPageComponent } from './session-list-page/session-list-page.component';
import { SessionPageComponent } from './session-page/session-page.component';
import { SessionRequestPageComponent } from './session-request-page/session-request-page.component';
import { SiteComponent } from './site/site.component';
import { VideoClientPageComponent } from './video-client-page/video-client-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TeaserComponent } from './teaser/teaser.component';
import { CircleComponent } from './circle/circle.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PageComponent,
    NavigationComponent,
    SessionListPageComponent,
    SessionItemComponent,
    MemberListPageComponent,
    SiteComponent,
    ChallengeListPageComponent,
    FaqPageComponent,
    AccountPageComponent,
    InfoComponent,
    SessionPageComponent,
    ChallengePageComponent,
    MemberPageComponent,
    SessionRequestPageComponent,
    VideoClientPageComponent,
    SessionFeedbackPageComponent,
    PostChallengePageComponent,
    ItemComponent,
    LoginComponent,
    LogoutComponent,
    DashboardPageComponent,
    TeaserComponent,
    CircleComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignModule,
    NgRefModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
