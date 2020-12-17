import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Page } from '../webflow.service';
import { Member } from '../peers.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-member-list-page',
  templateUrl: './member-list-page.component.html',
  styleUrls: ['./member-list-page.component.scss']
})
export class MemberListPageComponent implements OnInit {

  list: Observable<Page<Member>>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.list = this.activatedRoute.data.pipe(
      map((data) => data && data.memberList)
    );
  }

  multiply(counter, text) {
    return new Array(counter % 3 + counter % 2 + 1).fill(text).join('');
  }
}
