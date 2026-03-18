import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  private balanceSubject = new BehaviorSubject<number>(500000);
  balance$ = this.balanceSubject.asObservable();

  get currentBalance(): number {
    return this.balanceSubject.value;
  }

  updateBalance(amount: number) {
    this.balanceSubject.next(amount);
  }

  decreaseBalance(amount: number) {
    const current = this.balanceSubject.value;
    this.balanceSubject.next(current - amount);
  }
}
