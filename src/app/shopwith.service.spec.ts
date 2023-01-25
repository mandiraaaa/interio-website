import { TestBed } from '@angular/core/testing';

import { ShopwithService } from './shopwith.service';

describe('ShopwithService', () => {
  let service: ShopwithService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopwithService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
