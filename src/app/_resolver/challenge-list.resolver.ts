import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { PeersService, Challenge } from '../peers.service';
import { Page } from '../webflow.service';

@Injectable({
  providedIn: 'root',
})
export class ChallengeListResolver implements Resolve<Page<Challenge>> {

  constructor(private service: PeersService) {}

  resolve(): Observable<Page<Challenge>> {
    return this.service.getChallengeList();
  }
}
