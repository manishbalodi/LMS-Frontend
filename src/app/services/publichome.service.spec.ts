import { TestBed } from '@angular/core/testing';

import { PublichomeService } from './publichome.service';

describe('PublichomeService', () => {
  let service: PublichomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublichomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
