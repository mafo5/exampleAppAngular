import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from '@mafo5/ng-design';
import * as __ from 'hamjest';

import { PageComponent } from './page.component';

@Component({
  template: '<app-page title="Test Title">TEST CONTENT</app-page>'
})
class TestWrapperComponent {}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mafo5-button',
  template: 'TEST_BUTTON <ng-content></ng-content>'
})
class TestButtonComponent extends ButtonComponent {}

describe('PageComponent', () => {
  let fixture: ComponentFixture<TestWrapperComponent>;
  let component: TestWrapperComponent;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        PageComponent,
        TestWrapperComponent,
        TestButtonComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the app', () => {

    __.assertThat(component, __.is(__.truthy()));
  });

  it('should render content', () => {

    __.assertThat(compiled, __.hasProperty('textContent', __.containsString('TEST CONTENT')));
  });

  it('should render title', () => {

    __.assertThat(compiled, __.hasProperty('textContent', __.containsString('Test Title')));
  });
});
