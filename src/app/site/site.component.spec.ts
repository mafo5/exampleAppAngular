import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import * as __ from 'hamjest';

import { SiteComponent } from './site.component';
import { Router } from '@angular/router';

@Component({ template: 'TEST CONTENT' })
class TestComponent {}

@Component({
  selector: 'app-navigation',
  template: 'TEST_NAVIGATION'
})
class TestNavigationComponent {}

describe('SiteComponent', () => {
  let fixture: ComponentFixture<SiteComponent>;
  let component: SiteComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: TestComponent },
        ])
      ],
      declarations: [
        SiteComponent,
        TestComponent,
        TestNavigationComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteComponent);
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

  it('should render navigation', () => {

    __.assertThat(compiled, __.hasProperty('textContent', __.containsString('TEST_NAVIGATION')));
  });
});
