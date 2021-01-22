import { Injectable } from '@angular/core';
import { MemberstackService } from './memberstack.service';
import { WebflowService, Page } from './webflow.service';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Session {}

export interface Challenge {
  text: string;
  topic: string;
  'member-name': string;
  'published-on': string;
}

export interface Member {
  'first-name': string;
  'last-name': string;
  'about-me': string;
  'city': string;
  'country-3': string;
  'level-of-experience': string;
  'position': string;
  'skill-string': string;
  'what-i-can-share': string;
  'what-i-want-to-learn': string;
  'years-of-experience': number;
  'portrait': {
    'url': string;
  };
  'timezone': string;
  '_id': string;
}

@Injectable({
  providedIn: 'root'
})
export class PeersService {

  constructor(private memberstack: MemberstackService, private webflow: WebflowService) { }

  getMember() {
    return this.memberstack.getMember();
  }

  getSessionList(): Observable<Page<Session>> {
    return this.memberstack.getMember().pipe(
      switchMap((member) =>
        this.webflow.getCollectionItems('5e11f6f45aa398e84a03cef4', 'Sessions').pipe(
          map((itemListPage): Page<Session> => {
            const sessionList: Session[] = itemListPage.items
              .filter((item) =>
                item['member-1'] === member.id || item['member-2'] === member.id
              )
              .map((item): Session => {
                console.log('item', item);
                return item as Session;
              });
            return {
              items: sessionList,
              count: sessionList.length,
              total: undefined,
              offset: itemListPage.offset,
              limit: itemListPage.limit,
            };
          })
        )
      )
    );
  }

  getChallengeList(): Observable<Page<Challenge>> {
    return this.webflow.getCollectionItems('5e11f6f45aa398e84a03cef4', 'Challenges')
      .pipe(
        map((list) => ({
          items: list.items.map((item) => item as any as Challenge),
          count: list.count,
          total: undefined,
          offset: list.offset,
          limit: list.limit,
        }))
      );
  }

  getChallenge(id: string): Observable<Challenge> {
    return this.webflow.getCollectionItem('5e11f6f45aa398e84a03cef4', 'Challenges', id)
      .pipe(
        map((item) => item as any as Challenge)
      );
  }

  getMemberList(): Observable<Page<Member>> {
    return this.webflow.getCollectionItems('5e11f6f45aa398e84a03cef4', 'Peer Members')
      .pipe(
        map((list) => {
          const filtered = list.items.filter((entry) => parseInt(entry['years-of-experience'], 10) > 0);
          return {
            items: filtered.map((item) => item as any as Member),
            count: filtered.length,
            total: undefined,
            offset: list.offset,
            limit: list.limit,
          };
        })
      );
  }

  updateMember(member: Member) {
  }
}
