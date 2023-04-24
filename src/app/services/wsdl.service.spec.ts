import { TestBed } from '@angular/core/testing';

import { WsdlService } from './wsdl.service';

describe('WsdlService', () => {
  let service: WsdlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsdlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
