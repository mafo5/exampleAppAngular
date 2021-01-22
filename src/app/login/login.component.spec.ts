import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from '@mafo5/ng-design';
import { EMPTY } from 'rxjs';
import { stub } from 'sinon';

import { MemberstackService } from '../memberstack.service';
import { LoginComponent } from './login.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mafo5-button',
  template: 'TEST_BUTTON <ng-content></ng-content>'
})
class TestListComponent extends ButtonComponent {}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        LoginComponent,
        TestListComponent,
      ],
      providers: [
        { provide: MemberstackService, useValue: { getMember: stub().returns(EMPTY) } },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
