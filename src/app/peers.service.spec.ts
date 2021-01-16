import { TestBed } from '@angular/core/testing';

import { MemberstackService } from './memberstack.service';
import { PeersService } from './peers.service';
import { WebflowService } from './webflow.service';

describe('PeersService', () => {
  let service: PeersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MemberstackService, useValue: {} },
        { provide: WebflowService, useValue: {} },
      ]
    });
    service = TestBed.inject(PeersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
