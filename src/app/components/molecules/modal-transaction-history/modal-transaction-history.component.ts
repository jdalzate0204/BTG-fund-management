import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageComponent } from '../../atoms/image/image.component';
import { Observable } from 'rxjs';
import { Transaction } from '../../../interfaces/transaction-history';
import { TransactionService } from '../../../services/transaction.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { NumberFormatPipe } from '../../../pipes/number-format-pipe';

@Component({
  selector: 'btg-modal-transaction-history',
  imports: [ImageComponent, AsyncPipe, DatePipe, NumberFormatPipe],
  templateUrl: './modal-transaction-history.component.html',
  styleUrl: './modal-transaction-history.component.scss',
})
export class ModalTransactionHistoryComponent implements OnInit {
  /**
   * Close event emitter
   */
  @Output() handleClose = new EventEmitter<any>();
  /**
   * Close icon image path
   */
  closeIcon: string = 'icons/close-icon.png';
  /**
   * Observable of transaction history
   */
  transactions$!: Observable<Transaction[]>;

  /**
   * Constructor
   * @param transactionService Service providing transaction history data
   */
  constructor(private transactionService: TransactionService) {}

  /**
   * OnInit lifecycle hook
   * Subscribes to the transaction history observable
   * @return void
   */
  ngOnInit(): void {
    this.transactions$ = this.transactionService.transaction$;
  }

  /**
   * Emit close event
   * Called when the user clicks the close button
   * @return void
   */
  onClosedClick(): void {
    this.handleClose.emit();
  }
}
