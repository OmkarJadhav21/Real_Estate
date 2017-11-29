import { TestBed, inject } from '@angular/core/testing';

import { EffectService } from './effect.service';

describe('EffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EffectService]
    });
  });

  it('should be created', inject([EffectService], (service: EffectService) => {
    expect(service).toBeTruthy();
  }));
});
