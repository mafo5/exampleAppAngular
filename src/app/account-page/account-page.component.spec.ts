import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPageComponent } from './account-page.component';
import { ActivatedRoute } from '@angular/router';
import { EMPTY } from 'rxjs';

describe('AccountPageComponent', () => {
  let component: AccountPageComponent;
  let fixture: ComponentFixture<AccountPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccountPageComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: {
          data: EMPTY
        } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
