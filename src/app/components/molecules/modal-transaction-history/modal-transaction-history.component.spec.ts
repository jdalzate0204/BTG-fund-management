import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTransactionHistoryComponent } from './modal-transaction-history.component';

describe('ModalTransactionHistoryComponent', () => {
  let component: ModalTransactionHistoryComponent;
  let fixture: ComponentFixture<ModalTransactionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalTransactionHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
