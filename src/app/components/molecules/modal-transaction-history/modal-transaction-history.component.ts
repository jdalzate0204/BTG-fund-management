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
  @Output() handleClose = new EventEmitter<any>();
  closeIcon: string = 'icons/close-icon.png';
  transactions$!: Observable<Transaction[]>;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactions$ = this.transactionService.transaction$;
  }

  onClosedClick(): void {
    this.handleClose.emit();
  }
}
