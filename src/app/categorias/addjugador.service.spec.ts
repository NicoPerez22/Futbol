import { TestBed, inject } from '@angular/core/testing';

import { AddjugadorService } from './addjugador.service';

describe('AddjugadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddjugadorService]
    });
  });

  it('should be created', inject([AddjugadorService], (service: AddjugadorService) => {
    expect(service).toBeTruthy();
  }));
});
