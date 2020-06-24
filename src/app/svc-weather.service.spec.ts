import { TestBed } from '@angular/core/testing';

import { SvcWeatherService } from './svc-weather.service';

describe('SvcWeatherService', () => {
  let service: SvcWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvcWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
