import { HeadlineComponent } from '@mafo5/ng-design';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardPageComponent } from './dashboard-page.component';
import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mafo5-headline',
  template: 'TEST_HEADLINE <ng-content></ng-content>'
})
class TestHeadlineComponent extends HeadlineComponent {}

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        DashboardPageComponent,
        TestHeadlineComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
