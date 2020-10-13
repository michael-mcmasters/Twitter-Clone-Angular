import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoToFollowComponent } from './who-to-follow.component';

describe('WhoToFollowComponent', () => {
  let component: WhoToFollowComponent;
  let fixture: ComponentFixture<WhoToFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoToFollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoToFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
