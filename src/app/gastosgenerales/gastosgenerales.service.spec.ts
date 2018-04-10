import { TestBed, inject } from '@angular/core/testing';

import { GastosgeneralesService } from './gastosgenerales.service';

describe('GastosgeneralesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GastosgeneralesService]
    });
  });

  it('should be created', inject([GastosgeneralesService], (service: GastosgeneralesService) => {
    expect(service).toBeTruthy();
  }));
});
