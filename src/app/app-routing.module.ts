import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', component: PageComponent, children: [
    { path: 'sessions', component: LandingPageComponent, data: { label: 'Sessions', icon: 'calendar' } },
    { path: 'challenges', component: LandingPageComponent, data: { label: 'Challenges', icon: 'key' } },
    { path: 'directory', component: LandingPageComponent, data: { label: 'Directory', icon: 'users' } },
    { path: 'resources', component: LandingPageComponent, data: { label: 'Resources', icon: 'book-open' } },
    { path: 'faqs', component: LandingPageComponent, data: { label: 'FAQs', icon: 'help-circle' } },
    { path: 'account', component: LandingPageComponent, data: { label: 'Account', icon: 'settings' } },
    { path: 'logout', component: LandingPageComponent, data: { label: 'Log out', icon: 'power' } },
    { path: '**', redirectTo: 'sessions' }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
