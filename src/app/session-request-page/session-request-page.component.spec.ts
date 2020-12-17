import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent, LabelComponent, ListComponent, TextareaComponent } from '@mafo5/ng-design';

import { PageComponent } from '../page/page.component';
import { SessionRequestPageComponent } from './session-request-page.component';

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
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mafo5-label',
  template: 'TEST_LABEL <ng-content></ng-content>'
})
class TestLabelComponent extends LabelComponent {}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mafo5-textarea',
  template: 'TEST_TEXTAREA <ng-content></ng-content>'
})
class TestTextareaComponent extends TextareaComponent {}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mafo5-button',
  template: 'TEST_BUTTON <ng-content></ng-content>'
})
class TestButtonComponent extends ButtonComponent {}

describe('SessionRequestPageComponent', () => {
  let component: SessionRequestPageComponent;
  let fixture: ComponentFixture<SessionRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        SessionRequestPageComponent,
        TestPageComponent,
        TestLabelComponent,
        TestTextareaComponent,
        TestButtonComponent,
        TestListComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
