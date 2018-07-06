import { TestBed, inject } from '@angular/core/testing';

import { IngresospartidoService } from './ingresospartido.service';

describe('IngresospartidoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngresospartidoService]
    });
  });

  it('should be created', inject([IngresospartidoService], (service: IngresospartidoService) => {
    expect(service).toBeTruthy();
  }));
});
