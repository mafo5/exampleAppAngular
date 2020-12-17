import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { PeersService, Session } from '../peers.service';
import { Page } from '../webflow.service';

@Injectable({
  providedIn: 'root',
})
export class SessionListResolver implements Resolve<Page<Session>> {

  constructor(private service: PeersService) {}

  resolve(): Observable<Page<Session>> {
    return this.service.getSessionList();
  }
}
