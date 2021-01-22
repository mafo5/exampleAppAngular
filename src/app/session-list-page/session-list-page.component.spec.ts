import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListComponent } from '@mafo5/ng-design';

import { PageComponent } from '../page/page.component';
import { SessionListPageComponent } from './session-list-page.component';

@Component({
  selector: 'app-session-item',
  template: 'TEST_SESSION_ITEM'
})
class TestSessionItemComponent {}

@Component({
  selector: 'app-page',
  template: 'TEST_PAGE <ng-content></ng-content>'
})
class TestPageComponent extends PageComponent {}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mafo5-list',
  template: 'TEST_LIST <ng-content></ng-content>'
})
class TestListComponent extends ListComponent {}

describe('SessionListPageComponent', () => {
  let component: SessionListPageComponent;
  let fixture: ComponentFixture<SessionListPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        SessionListPageComponent,
        TestListComponent,
        TestSessionItemComponent,
        TestPageComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
