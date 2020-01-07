import { TestBed } from '@angular/core/testing';

import { NewseriveService } from './newserive.service';

describe('NewseriveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewseriveService = TestBed.get(NewseriveService);
    expect(service).toBeTruthy();
  });
});
