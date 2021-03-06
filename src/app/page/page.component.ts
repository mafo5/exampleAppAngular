import { Component, Input } from '@angular/core';

export interface Action {
  label: string;
  link: string;
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  @Input() title: string;
  @Input() actionList: Action[] = [];
  @Input() back: string = null;

}
