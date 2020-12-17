import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Member, PeersService } from '../peers.service';
import { Page } from '../webflow.service';

@Injectable({
  providedIn: 'root',
})
export class MemberListResolver implements Resolve<Page<Member>> {

  constructor(private service: PeersService) {}

  resolve(): Observable<Page<Member>> {
    return this.service.getMemberList();
  }
}
