import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Member } from '../memberstack.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  firstname: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const member = this.activatedRoute.data.pipe(
      map((data): Member => data && data.member)
    );
    this.firstname = member.pipe(
      map((memberObject) => memberObject && memberObject.profile && memberObject.profile['first-name'])
    );
  }

}
