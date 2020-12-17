import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListComponent } from '@mafo5/ng-design';

import { PageComponent } from '../page/page.component';
import { MemberListPageComponent } from './member-list-page.component';

@Component({
  selector: 'app-session',
  template: 'TEST_SESSION'
})
class TestSessionComponent {}

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

describe('MemberListPageComponent', () => {
  let component: MemberListPageComponent;
  let fixture: ComponentFixture<MemberListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        MemberListPageComponent,
        TestListComponent,
        TestSessionComponent,
        TestPageComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
