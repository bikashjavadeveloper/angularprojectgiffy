import { TestBed } from '@angular/core/testing';

import { RegistrationapiService } from './registrationapi.service';

describe('RegistrationapiService', () => {
  let service: RegistrationapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
