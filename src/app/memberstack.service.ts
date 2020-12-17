import { Injectable } from '@angular/core';
import { WindowRef } from '@mafo5/ng-ref';
import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export interface MemberProfileData {
  'first-name': string;
  'last-name': string;
  'email': string;
  [key: string]: string; // snakecase
}
export interface MemberMetaData {
  [key: string]: string; // valid json
}
export interface Member {
  id: string;
  loggedIn: boolean;
  memberPage: string;
  membership: {
    id: string;
    status: 'active' | 'canceled' | 'past_due' | 'unpaid' | 'trialing';
    cancel_at_period_end: Date, // unix timestamp
    current_period_end: string,
  };
  profile: MemberProfileData;
  updateProfile: (profileData: MemberProfileData, withLoader?: boolean) => void;
  updateMetaData: (metaData: MemberMetaData) => void;
  getMetaData: () => Promise<MemberMetaData>;
}
export const mapToLoggedIn = () => map((member: Member): boolean => member && member.loggedIn);

@Injectable({
  providedIn: 'root'
})
export class MemberstackService {

  private memberstack: Observable<any>;

  constructor(windowRef: WindowRef) {
    this.memberstack = windowRef.getGlobalObject('MemberStack');
  }

  private mapMember(input): Member {
    return {
      ...input,
      id: input.id,
      membership: {
        ...input.membership,
        current_period_end:
          input.membership
          && input.membership.current_period_end
          && new Date(input.membership.current_period_end * 1000) || null,
      },
      profile: {
        ...input,
        'first-name': input['first-name'],
        'last-name': input['last-name'],
        email: input.email,
      }
    };
  }

  getMember(): Observable<Member> {
    const subject = new Subject<Member>();
    this.memberstack.pipe(
      switchMap((memberstackObjectPromise): Observable<Member> => {
        if (memberstackObjectPromise && memberstackObjectPromise.onReady) {
          memberstackObjectPromise.onReady.then((memberObject) => {
            const output = this.mapMember(memberObject);
            subject.next(output);
            subject.complete();
          });
        } else {
          subject.error('no memberstack');
          subject.complete();
        }
        return subject;
      })
    ).subscribe(() => {});
    return subject;
  }
}
