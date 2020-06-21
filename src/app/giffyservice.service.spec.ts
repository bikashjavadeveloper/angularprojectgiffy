import { TestBed } from '@angular/core/testing';

import { GiffyserviceService } from './giffyservice.service';

describe('GiffyserviceService', () => {
  let service: GiffyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiffyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
