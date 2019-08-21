import { TestBed, async, inject } from '@angular/core/testing';

import { SaveChangesGuard } from './save-changes.guard';

describe('SaveChangesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveChangesGuard]
    });
  });

  it('should ...', inject([SaveChangesGuard], (guard: SaveChangesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
