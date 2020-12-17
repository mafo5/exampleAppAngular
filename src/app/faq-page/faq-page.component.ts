import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

  openList = {};

  constructor() { }

  ngOnInit(): void {
  }

  isOpen(item) {
    return this.openList[item];
  }

  toggle(item) {
    this.openList[item] = !this.openList[item];
  }
}
