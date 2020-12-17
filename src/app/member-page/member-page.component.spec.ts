import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent, HeadlineComponent, ListComponent } from '@mafo5/ng-design';

import { InfoComponent } from '../info/info.component';
import { PageComponent } from '../page/page.component';
import { MemberPageComponent } from './member-page.component';

@Component({
  selector: 'app-page',
  template: 'TEST_PAGE <ng-content></ng-content>'
})
class TestPageComponent extends PageComponent {}

@Component({
  selector: 'app-info',
  template: 'TEST_INFO <ng-content></ng-content>'
})
class TestInfoComponent extends InfoComponent {}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mafo5-list',
  template: 'TEST_LIST <ng-content></ng-content>'
})
class TestListComponent extends ListComponent {}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mafo5-button',
  template: 'TEST_BUTTON <ng-content></ng-content>'
})
class TestButtonComponent extends ButtonComponent {}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mafo5-headline',
  template: 'TEST_HEADLINE <ng-content></ng-content>'
})
class TestHeadlineComponent extends HeadlineComponent {}

describe('MemberPageComponent', () => {
  let component: MemberPageComponent;
  let fixture: ComponentFixture<MemberPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        MemberPageComponent,
        TestPageComponent,
        TestInfoComponent,
        TestListComponent,
        TestButtonComponent,
        TestHeadlineComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
