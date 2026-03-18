import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  /**
   * Internal BehaviorSubject to store current balance
   */
  private balanceSubject = new BehaviorSubject<number>(500000);
  /**
   * Observable for current balance
   */
  balance$ = this.balanceSubject.asObservable();

  /**
   * Current balance getter
   * @return Current numeric balance
   */
  get currentBalance(): number {
    return this.balanceSubject.value;
  }

  /**
   * Update balance
   * Sets the balance to a specific amount
   * @param amount New balance amount
   * @return void
   */
  updateBalance(amount: number) {
    this.balanceSubject.next(amount);
  }

  /**
   * Decrease balance
   * Reduces the current balance by the specified amount
   * @param amount Amount to subtract from balance
   * @return void
   */
  decreaseBalance(amount: number) {
    const current = this.balanceSubject.value;
    this.balanceSubject.next(current - amount);
  }
}
