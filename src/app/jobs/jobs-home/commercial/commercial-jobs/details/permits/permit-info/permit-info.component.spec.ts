import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitInfoComponent } from './permit-info.component';

describe('PermitInfoComponent', () => {
  let component: PermitInfoComponent;
  let fixture: ComponentFixture<PermitInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermitInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
