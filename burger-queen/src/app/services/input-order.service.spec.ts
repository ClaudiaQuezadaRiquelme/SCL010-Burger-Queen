import { TestBed } from '@angular/core/testing';

import { InputOrderService } from './input-order.service';

describe('InputOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputOrderService = TestBed.get(InputOrderService);
    expect(service).toBeTruthy();
  });
});
