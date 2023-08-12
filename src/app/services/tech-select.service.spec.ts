import { TestBed } from '@angular/core/testing';

import { TechSelectService } from './tech-select.service';

describe('TechSelectService', () => {
  let service: TechSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
