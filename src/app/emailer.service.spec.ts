import { TestBed, inject } from '@angular/core/testing';

import { EmailerService } from './emailer.service';

describe('EmailerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailerService]
    });
  });

  it('should be created', inject([EmailerService], (service: EmailerService) => {
    expect(service).toBeTruthy();
  }));
});
