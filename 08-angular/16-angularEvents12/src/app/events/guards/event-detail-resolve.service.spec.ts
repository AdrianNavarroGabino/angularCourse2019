import { TestBed, async, inject } from '@angular/core/testing';

import { EventDetailResolve } from './event-detail-resolve.service';

describe('EventDetailResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventDetailResolve]
    });
  });

  it('should ...', inject([EventDetailResolve], (guard: EventDetailResolve) => {
    expect(guard).toBeTruthy();
  }));
});
