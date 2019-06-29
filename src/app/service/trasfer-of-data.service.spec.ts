import { TestBed } from '@angular/core/testing';

import { TrasferOfDataService } from './trasfer-of-data.service';

describe('TrasferOfDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrasferOfDataService = TestBed.get(TrasferOfDataService);
    expect(service).toBeTruthy();
  });
});
