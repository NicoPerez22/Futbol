import { TestBed, inject } from '@angular/core/testing';

import { TelefonoutilService } from './telefonoutil.service';

describe('TelefonoutilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TelefonoutilService]
    });
  });

  it('should be created', inject([TelefonoutilService], (service: TelefonoutilService) => {
    expect(service).toBeTruthy();
  }));
});
