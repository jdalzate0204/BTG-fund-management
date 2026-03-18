import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transaction } from '../interfaces/transaction-history';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  /**
   * Internal BehaviorSubject storing the list of transactions
   */
  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  /**
   * Observable of transaction history
   */
  transaction$ = this.transactionsSubject.asObservable();
  /**
   * Next transaction ID
   */
  private nextId = 1;

  /**
   * Add a new transaction
   * Automatically sets an ID and timestamp
   * @param transaction Transaction object without id and fecha
   * @return void
   */
  addTransaction(transaction: Omit<Transaction, 'id' | 'fecha'>) {
    const newTransaction: Transaction = {
      id: this.nextId++,
      fecha: new Date(),
      ...transaction,
    };

    const current = this.transactionsSubject.value;
    this.transactionsSubject.next([newTransaction, ...current]);
  }
}
