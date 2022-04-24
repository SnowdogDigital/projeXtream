import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyFormTaskComponent } from './daily-form-task.component';

describe('DailyFormTaskComponent', () => {
  let component: DailyFormTaskComponent;
  let fixture: ComponentFixture<DailyFormTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyFormTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyFormTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
