import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XfersJobsComponent } from './xfers-jobs.component';

describe('XfersJobsComponent', () => {
  let component: XfersJobsComponent;
  let fixture: ComponentFixture<XfersJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XfersJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XfersJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
