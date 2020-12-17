import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Challenge, PeersService } from '../peers.service';

export const CHALLENGE_IDENTIFIER = 'challengeId';

@Injectable({
  providedIn: 'root',
})
export class ChallengeResolver implements Resolve<Challenge> {

  constructor(private service: PeersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Challenge> {
    const id = route.paramMap.get(CHALLENGE_IDENTIFIER);
    return this.service.getChallenge(id);
  }
}
