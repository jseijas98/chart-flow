import { TestBed } from '@angular/core/testing';

import { FlowCharServicesService } from './flow-char-services.service';

describe('FlowCharServicesService', () => {
  let service: FlowCharServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowCharServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
