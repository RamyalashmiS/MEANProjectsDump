import { TestBed } from '@angular/core/testing';

import { BonStayServService } from './bon-stay-serv.service';

describe('BonStayServService', () => {
  let service: BonStayServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonStayServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
