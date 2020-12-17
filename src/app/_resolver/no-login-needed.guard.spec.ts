import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NoLoginNeededGuard } from './no-login-needed.guard';
import { MemberstackService } from '../memberstack.service';
import { stub } from 'sinon';
import { EMPTY } from 'rxjs';

describe('NoLoginNeededGuard', () => {
  let guard: NoLoginNeededGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        NoLoginNeededGuard,
        { provide: MemberstackService, useValue: { getMember: stub().returns(EMPTY) } },
      ]
    });
    guard = TestBed.inject(NoLoginNeededGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
