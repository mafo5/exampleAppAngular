import { Component, OnInit, Input } from '@angular/core';

export interface ActionBase {
  label: string;
  type: string;
}
export interface FunctionAction extends ActionBase {
  action: () => void;
}
export interface LinkAction extends ActionBase {
  link: string;
}

export type Action = LinkAction | FunctionAction;

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})
export class TeaserComponent implements OnInit {

  @Input() title: string;
  @Input() actionList: Action[];

  constructor() { }

  ngOnInit(): void {
  }

}
