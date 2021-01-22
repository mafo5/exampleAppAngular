import { HeadlineComponent } from '@mafo5/ng-design';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserComponent } from './teaser.component';
import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mafo5-headline',
  template: 'TEST_HEADLINE <ng-content></ng-content>'
})
class TestHeadlineComponent extends HeadlineComponent {}

describe('TeaserComponent', () => {
  let component: TeaserComponent;
  let fixture: ComponentFixture<TeaserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TeaserComponent,
        TestHeadlineComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
