import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DistanceCalcService } from './distance-calc.service';

describe('DistanceCalcService', () => {
  let service: DistanceCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(DistanceCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
