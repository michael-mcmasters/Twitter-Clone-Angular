import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorThemeToggleComponent } from './color-theme-toggle.component';

describe('ColorThemeToggleComponent', () => {
  let component: ColorThemeToggleComponent;
  let fixture: ComponentFixture<ColorThemeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorThemeToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorThemeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
