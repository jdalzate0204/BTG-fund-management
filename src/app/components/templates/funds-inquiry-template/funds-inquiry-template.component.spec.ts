import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsInquiryTemplateComponent } from './funds-inquiry-template.component';

describe('FundsInquiryTemplateComponent', () => {
  let component: FundsInquiryTemplateComponent;
  let fixture: ComponentFixture<FundsInquiryTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundsInquiryTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FundsInquiryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
