import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import * as __ from 'hamjest';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  }));

  it('should create the app', () => {

    __.assertThat(component, __.is(__.truthy()));
  });

  it(`should have as title 'exampleApp'`, () => {

    __.assertThat(component, __.hasProperty('title', __.is('exampleApp')));
  });

  it('should render title', () => {

    __.assertThat(compiled.querySelector('.content span'), __.hasProperty('textContent', __.containsString('exampleApp app is running!')));
  });
});
