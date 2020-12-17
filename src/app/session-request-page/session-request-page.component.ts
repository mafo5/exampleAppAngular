import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-request-page',
  templateUrl: './session-request-page.component.html',
  styleUrls: ['./session-request-page.component.scss']
})
export class SessionRequestPageComponent implements OnInit {

  selectedDay = 'MON';
  selectedSlot;

  constructor() { }

  ngOnInit(): void {
  }

}
