import { TestBed } from '@angular/core/testing';

import { PhpHandlerService } from './php-handler.service';

describe('PhpHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhpHandlerService = TestBed.get(PhpHandlerService);
    expect(service).toBeTruthy();
  });
});
