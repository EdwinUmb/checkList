import { TestBed } from '@angular/core/testing';

import { HolidarService } from './holidar.service';

describe('HolidarService', () => {
  let service: HolidarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
