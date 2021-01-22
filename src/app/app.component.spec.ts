import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import * as __ from 'hamjest';

import { AppComponent } from './app.component';

@Component({ template: 'TEST CONTENT' })
class TestComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: TestComponent },
        ])
      ],
      declarations: [
        AppComponent,
        TestComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;

    const router = TestBed.inject(Router);
    fixture.ngZone.run(() => {
      router.initialNavigation();
    });
    fixture.detectChanges();
  }));

  it('should create the app', () => {

    __.assertThat(component, __.is(__.truthy()));
  });

  it(`should have as title 'exampleApp'`, () => {

    __.assertThat(component, __.hasProperty('title', __.is('exampleApp')));
  });

  it('should render routing content', () => {

    __.assertThat(compiled, __.hasProperty('textContent', __.is('TEST CONTENT')));
  });
});
