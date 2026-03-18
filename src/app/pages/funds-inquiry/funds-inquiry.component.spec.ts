import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsInquiryComponent } from './funds-inquiry.component';

describe('FundsInquiryComponent', () => {
  let component: FundsInquiryComponent;
  let fixture: ComponentFixture<FundsInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundsInquiryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FundsInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
