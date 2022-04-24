import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyFormJobComponent } from './daily-form-job.component';

describe('DailyFormJobComponent', () => {
  let component: DailyFormJobComponent;
  let fixture: ComponentFixture<DailyFormJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyFormJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyFormJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
