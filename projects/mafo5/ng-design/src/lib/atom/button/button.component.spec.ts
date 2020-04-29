import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as __ from 'hamjest';

import { ButtonComponent } from './button.component';

@Component({
  template: '<mafo5-button>TEST CONTENT</mafo5-button>'
})
class TestWrapperComponent {}

describe('ButtonComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent, TestWrapperComponent ]
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
