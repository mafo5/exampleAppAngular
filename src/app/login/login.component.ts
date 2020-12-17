import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberstackService } from '../memberstack.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private memberstackService: MemberstackService) {
  }

  ngOnInit(): void {
    this.memberstackService.getMember().toPromise().then((member) => {
      if (member && member.loggedIn) {
        this.router.navigate(['/sessions']);
      }
    });
  }

}
