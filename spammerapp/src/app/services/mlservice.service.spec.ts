import { TestBed } from '@angular/core/testing';

import { MlserviceService } from './mlservice.service';

describe('MlserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MlserviceService = TestBed.get(MlserviceService);
    expect(service).toBeTruthy();
  });
});
