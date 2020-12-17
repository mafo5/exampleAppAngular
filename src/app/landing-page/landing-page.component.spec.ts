import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as __ from 'hamjest';

import { LandingPageComponent } from './landing-page.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mafo5-icon',
  template: 'TEST_ICON {{value|json}}',
})
class TestIconComponent {
  @Input() value: any;
}

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LandingPageComponent,
        TestIconComponent,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  }));

  it('should create', () => {

    __.assertThat(component, __.is(__.truthy()));
  });

  it('should display icon', () => {

    __.assertThat(compiled, __.hasProperty('innerText', __.containsString('TEST_ICON')));
  });
});
