import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * Internal BehaviorSubject to track login status
   */
  private isLoggedInSubject: BehaviorSubject<boolean>;
  /**
   * Observable of user login status
   */
  isLoggedIn$: any;

  /**
   * Constructor
   * Initializes login status from StorageService
   * @param storageService Service to manage session storage
   */
  constructor(private storageService: StorageService) {
    this.isLoggedInSubject = new BehaviorSubject<boolean>(this.storageService.hasSession());
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
  }

  /**
   * Login user
   * Sets session in storage and updates login status
   * @return void
   */
  login() {
    this.storageService.setSession();
    this.isLoggedInSubject.next(true);
  }

  /**
   * Logout user
   * Deletes session from storage and updates login status
   * @return void
   */
  logout() {
    this.storageService.deleteSession();
    this.isLoggedInSubject.next(false);
  }
}
