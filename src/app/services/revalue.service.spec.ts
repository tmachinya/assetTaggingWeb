import { TestBed } from '@angular/core/testing';

import { RevalueService } from './revalue.service';

describe('RevalueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RevalueService = TestBed.get(RevalueService);
    expect(service).toBeTruthy();
  });
});
