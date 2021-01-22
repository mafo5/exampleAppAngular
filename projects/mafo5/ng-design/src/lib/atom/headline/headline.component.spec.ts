import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import * as __ from 'hamjest';

import { HeadlineComponent } from './headline.component';

@Component({
  template: '<mafo5-headline>TEST CONTENT</mafo5-headline>'
})
class TestWrapperComponent {}

describe('HeadlineComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlineComponent, TestWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  }));

  it('should create', () => {

    __.assertThat(component, __.is(__.truthy()));
  });

  it('should display content', () => {

    __.assertThat(compiled, __.hasProperty('innerText', __.is('TEST CONTENT')));
  });
});
