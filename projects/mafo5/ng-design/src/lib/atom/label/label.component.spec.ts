import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as __ from 'hamjest';

import { LabelComponent } from './label.component';

@Component({
  template: '<mafo5-label>TEST CONTENT</mafo5-label>'
})
class TestWrapperComponent {}

describe('LabelComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelComponent, TestWrapperComponent ]
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
