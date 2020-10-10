import { TestBed } from '@angular/core/testing';

import { ColorThemeService } from './color-theme.service';

describe('ColorThemeService', () => {
  let service: ColorThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
