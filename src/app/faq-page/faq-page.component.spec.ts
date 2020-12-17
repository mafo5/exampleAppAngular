import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from '@mafo5/ng-design';

import { PageComponent } from '../page/page.component';
import { FaqPageComponent } from './faq-page.component';

@Component({
  selector: 'app-page',
  template: 'TEST_PAGE <ng-content></ng-content>'
})
class TestPageComponent extends PageComponent {}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mafo5-list',
  template: 'TEST_LIST <ng-content></ng-content>'
})
class TestListComponent extends ListComponent {}

describe('FaqPageComponent', () => {
  let component: FaqPageComponent;
  let fixture: ComponentFixture<FaqPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FaqPageComponent,
        TestPageComponent,
        TestListComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
