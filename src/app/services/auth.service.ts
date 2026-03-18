import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean>;
  isLoggedIn$: any;

  constructor(private storageService: StorageService) {
    this.isLoggedInSubject = new BehaviorSubject<boolean>(this.storageService.hasSession());
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
  }

  login() {
    this.storageService.setSession();
    this.isLoggedInSubject.next(true);
  }

  logout() {
    this.storageService.deleteSession();
    this.isLoggedInSubject.next(false);
  }
}
