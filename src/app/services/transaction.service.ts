import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transaction } from '../interfaces/transaction-history';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  transaction$ = this.transactionsSubject.asObservable();

  private nextId = 1;

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
