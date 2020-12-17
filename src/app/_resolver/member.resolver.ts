import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

import { Member, MemberstackService } from '../memberstack.service';

@Injectable({
  providedIn: 'root',
})
export class MemberResolver implements Resolve<Member> {

  constructor(private memberstackService: MemberstackService) {}

  resolve(): Observable<Member> {
    return this.memberstackService.getMember();
  }
}
