import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BauJobsComponent } from './bau-jobs.component';

describe('BauJobsComponent', () => {
  let component: BauJobsComponent;
  let fixture: ComponentFixture<BauJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BauJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BauJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
