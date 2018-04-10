import { TestBed, inject } from '@angular/core/testing';

import { MicrosService } from './micros.service';

describe('MicrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MicrosService]
    });
  });

  it('should be created', inject([MicrosService], (service: MicrosService) => {
    expect(service).toBeTruthy();
  }));
});
