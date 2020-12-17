import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../webflow.service';
import { Challenge } from '../peers.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-challenge-list-page',
  templateUrl: './challenge-list-page.component.html',
  styleUrls: ['./challenge-list-page.component.scss']
})
export class ChallengeListPageComponent implements OnInit {

  challengeList: Observable<Page<Challenge>>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.challengeList = this.activatedRoute.data.pipe(
      map((data) => data && data.challengeList)
    );
  }

  multiply(counter, text) {
    return new Array(counter % 3 + counter % 2 + 1).fill(text).join('');
  }

}
