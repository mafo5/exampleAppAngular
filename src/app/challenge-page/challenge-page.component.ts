import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Page } from '../webflow.service';
import { Challenge } from '../peers.service';

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.component.html',
  styleUrls: ['./challenge-page.component.scss']
})
export class ChallengePageComponent implements OnInit {

  challenge: Observable<Challenge>;

  title: Observable<string>;
  content: Observable<string>;
  userName: Observable<string>;
  publishedOn: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.challenge = this.activatedRoute.data.pipe(
      map((data) => data && data.challenge)
    );
    this.title = this.challenge.pipe(map((challengeData) => challengeData && challengeData.topic));
    this.content = this.challenge.pipe(map((challengeData) => challengeData && challengeData.text));
    this.userName = this.challenge.pipe(map((challengeData) => challengeData && challengeData['member-name']));
    this.publishedOn = this.challenge.pipe(map((challengeData) => challengeData && challengeData['published-on']));
  }

}
