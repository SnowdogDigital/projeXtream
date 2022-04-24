import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialHomeComponent } from './commercial-jobs.component';

describe('CommercialHomeComponent', () => {
  let component: CommercialHomeComponent;
  let fixture: ComponentFixture<CommercialHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
