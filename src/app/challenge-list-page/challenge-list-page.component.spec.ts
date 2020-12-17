import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListComponent } from '@mafo5/ng-design';

import { InfoComponent } from '../info/info.component';
import { PageComponent } from '../page/page.component';
import { ChallengeListPageComponent } from './challenge-list-page.component';

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

describe('ChallengeListPageComponent', () => {
  let component: ChallengeListPageComponent;
  let fixture: ComponentFixture<ChallengeListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        ChallengeListPageComponent,
        TestPageComponent,
        TestInfoComponent,
        TestListComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
