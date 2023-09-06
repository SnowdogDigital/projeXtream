import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialJobsComponent } from './commercial-jobs.component';

describe('CommercialHomeComponent', () => {
  let component: CommercialJobsComponent;
  let fixture: ComponentFixture<CommercialJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
