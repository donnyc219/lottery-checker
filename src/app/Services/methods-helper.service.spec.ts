import { TestBed, inject } from '@angular/core/testing';

import { MethodsHelperService } from './methods-helper.service';

describe('MethodsHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MethodsHelperService]
    });
  });

  it('should be created', inject([MethodsHelperService], (service: MethodsHelperService) => {
    expect(service).toBeTruthy();
  }));
});
