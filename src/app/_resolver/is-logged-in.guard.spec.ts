import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IsLoggedInGuard } from './is-logged-in.guard';
import { stub } from 'sinon';
import { EMPTY } from 'rxjs';
import { MemberstackService } from '../memberstack.service';

describe('IsLoggedInGuard', () => {
  let guard: IsLoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        IsLoggedInGuard,
        { provide: MemberstackService, useValue: { getMember: stub().returns(EMPTY) } },
      ]
    });
    guard = TestBed.inject(IsLoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
