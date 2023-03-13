import { TestBed } from '@angular/core/testing';

import { DungeonsAndDragonsService } from './dungeons-and-dragons.service';

describe('DungeonsAndDragonsService', () => {
  let service: DungeonsAndDragonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DungeonsAndDragonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
