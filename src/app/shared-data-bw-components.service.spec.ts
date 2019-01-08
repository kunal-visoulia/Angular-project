import { TestBed } from '@angular/core/testing';

import { SharedDataBwComponentsService } from './shared-data-bw-components.service';

describe('SharedDataBwComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedDataBwComponentsService = TestBed.get(SharedDataBwComponentsService);
    expect(service).toBeTruthy();
  });
});
