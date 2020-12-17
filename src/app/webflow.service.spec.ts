import { TestBed } from '@angular/core/testing';

import { WebflowService } from './webflow.service';

describe('WebflowService', () => {
  let service: WebflowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebflowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
