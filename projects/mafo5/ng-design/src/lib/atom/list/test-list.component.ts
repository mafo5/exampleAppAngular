import { Component } from '@angular/core';

import { ListComponent } from './list.component';

@Component({
  selector: 'app-list',
  template: `TEST_LIST {{list}}
    <ng-container [ngTemplateOutlet]="template"
                  [ngTemplateOutletContext]="{$implicit: list && list.length && list[0] !== undefined && list[0] || 0 }"></ng-container>
  `,
})
export class TestListComponent extends ListComponent {
  item: any;
}
