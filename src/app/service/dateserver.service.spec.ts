import { TestBed } from '@angular/core/testing';

import { DateserverService } from './dateserver.service';

describe('DateserverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateserverService = TestBed.get(DateserverService);
    expect(service).toBeTruthy();
  });
});
