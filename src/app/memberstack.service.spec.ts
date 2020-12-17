import { TestBed } from '@angular/core/testing';

import { MemberstackService } from './memberstack.service';
import { WindowRef } from '@mafo5/ng-ref';
import { stub } from 'sinon';
import { EMPTY } from 'rxjs';

describe('MemberstackService', () => {
  let service: MemberstackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: WindowRef, useValue: { getGlobalObject: stub().returns(EMPTY) } }
      ]
    });
    service = TestBed.inject(MemberstackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
