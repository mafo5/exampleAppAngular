import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberResolver } from './_resolver/member.resolver';
import { AccountPageComponent } from './account-page/account-page.component';
import { ChallengeListPageComponent } from './challenge-list-page/challenge-list-page.component';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MemberListPageComponent } from './member-list-page/member-list-page.component';
import { MemberPageComponent } from './member-page/member-page.component';
import { PostChallengePageComponent } from './post-challenge-page/post-challenge-page.component';
import { SessionFeedbackPageComponent } from './session-feedback-page/session-feedback-page.component';
import { SessionListPageComponent } from './session-list-page/session-list-page.component';
import { SessionPageComponent } from './session-page/session-page.component';
import { SessionRequestPageComponent } from './session-request-page/session-request-page.component';
import { SiteComponent } from './site/site.component';
import { VideoClientPageComponent } from './video-client-page/video-client-page.component';
import { SessionListResolver } from './_resolver/session-list.resolver';
import { ChallengeListResolver } from './_resolver/challenge-list.resolver';
import { ChallengeResolver, CHALLENGE_IDENTIFIER } from './_resolver/challenge.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: SiteComponent, resolve: { member: MemberResolver }, children: [
    { path: 'dashboard', component: DashboardPageComponent, data: { label: 'Dashboard', icon: 'user' } },
    {
      path: 'sessions', component: SessionListPageComponent,
      data: { label: 'Sessions', icon: 'calendar' },
      resolve: { sessionList: SessionListResolver },
    },
    { path: 'sessions/:id', component: SessionPageComponent, data: {} },
    { path: 'sessions/:id/video', component: VideoClientPageComponent, data: {} },
    { path: 'sessions/:id/feedback', component: SessionFeedbackPageComponent, data: {} },
    {
      path: 'challenges', component: ChallengeListPageComponent,
      data: { label: 'Challenges', icon: 'key' },
      resolve: { challengeList: ChallengeListResolver },
    },
    { path: 'challenges/post', component: PostChallengePageComponent, data: {} },
    {
      path: `challenges/:${CHALLENGE_IDENTIFIER}`, component: ChallengePageComponent,
      data: {},
      resolve: { challenge: ChallengeResolver },
    },
    {
      path: 'members', component: MemberListPageComponent,
      data: { label: 'Directory', icon: 'users' },
      resolve: { memberList: MemberListResolver },
    },
    { path: 'members/:id', component: MemberPageComponent, data: {} },
    { path: 'members/:id/request', component: SessionRequestPageComponent, data: {} },
    { path: 'faqs', component: FaqPageComponent, data: { label: 'FAQs', icon: 'help-circle' } },
    { path: 'account', component: AccountPageComponent, data: { label: 'Account', icon: 'settings' } },
    { path: 'logout', component: LogoutComponent, data: { label: 'Log out', icon: 'power', logout: true } },
    { path: '**', redirectTo: '/login' }
  ] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always', enableTracing: true })],
  providers: [
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
