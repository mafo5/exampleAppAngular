import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import * as __ from 'hamjest';

import { PageComponent } from './page.component';
import { Router } from '@angular/router';

@Component({ template: 'TEST CONTENT' })
class TestComponent {}

describe('PageComponent', () => {
  let fixture: ComponentFixture<PageComponent>;
  let component: PageComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: TestComponent },
        ])
      ],
      declarations: [
        PageComponent,
        TestComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PageComponent);
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

  it('should render routing content', () => {

    __.assertThat(compiled, __.hasProperty('textContent', __.containsString('TEST CONTENT')));
  });

  it('should render header', () => {

    __.assertThat(compiled, __.hasProperty('textContent', __.containsString('HEADER')));
  });

  it('should render footer', () => {

    __.assertThat(compiled, __.hasProperty('textContent', __.containsString('FOOTER')));
  });
});
