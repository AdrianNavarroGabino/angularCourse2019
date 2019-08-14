import { TestBed, async, inject } from '@angular/core/testing';

import { ProductDetailResolve } from './product-detail-resolve.service';

describe('ProductDetailResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailResolve]
    });
  });

  it('should ...', inject([ProductDetailResolve], (guard: ProductDetailResolve) => {
    expect(guard).toBeTruthy();
  }));
});
