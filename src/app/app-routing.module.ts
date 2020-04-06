import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', component: PageComponent, children: [
    { path: 'sessions', component: LandingPageComponent },
    { path: 'challenges', component: LandingPageComponent },
    { path: 'directory', component: LandingPageComponent },
    { path: 'resources', component: LandingPageComponent },
    { path: 'faqs', component: LandingPageComponent },
    { path: 'account', component: LandingPageComponent },
    { path: 'logout', component: LandingPageComponent },
    { path: '**', redirectTo: 'sessions' }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
