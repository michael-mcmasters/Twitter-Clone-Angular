import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsHappeningComponent } from './whats-happening.component';

describe('WhatsHappeningComponent', () => {
  let component: WhatsHappeningComponent;
  let fixture: ComponentFixture<WhatsHappeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsHappeningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsHappeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
