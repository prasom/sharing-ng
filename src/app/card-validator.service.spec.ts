import { TestBed } from '@angular/core/testing';

import { CardValidatorService } from './card-validator.service';

describe('CardValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardValidatorService = TestBed.get(CardValidatorService);
    expect(service).toBeTruthy();
  });
});
