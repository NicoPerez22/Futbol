import { TestBed, inject } from '@angular/core/testing';

import { ArbitrosmedService } from './arbitrosmed.service';

describe('ArbitrosmedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArbitrosmedService]
    });
  });

  it('should be created', inject([ArbitrosmedService], (service: ArbitrosmedService) => {
    expect(service).toBeTruthy();
  }));
});
