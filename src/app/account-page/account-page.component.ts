import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Member } from '../memberstack.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  member: Observable<Member>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.member = this.activatedRoute.data.pipe(
      map((data): Member => data && data.member)
    );
  }

}
