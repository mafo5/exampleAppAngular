import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'design-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() list: any[];
  @Input() template: TemplateRef<any>;
  @Input() horizontalStack = false;
  @Input() horizontal = false;

  getContext(item, i) {
    return {
      item,
      index: i,
      $implicit: item,
    };
  }
}
