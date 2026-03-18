import { TestBed } from '@angular/core/testing';

import { FoundsService } from './founds.service';

describe('FoundsService', () => {
  let service: FoundsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoundsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
