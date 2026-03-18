import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  /**
   * Generate a random 8-digit number
   * @return number Random 8-digit integer
   */
  generateRandomNumber(): number {
    return Math.floor(10000000 + Math.random() * 90000000);
  }

  /**
   * Set session in localStorage
   * Generates a random session ID and stores it
   * @return void
   */
  setSession() {
    localStorage.setItem('sessionId', this.generateRandomNumber().toString());
  }

  /**
   * Check if a session exists
   * @return boolean True if sessionId exists in localStorage, false otherwise
   */

  hasSession(): boolean {
    return !!localStorage.getItem('sessionId');
  }

  /**
   * Delete session from localStorage
   * @return void
   */
  deleteSession() {
    localStorage.removeItem('sessionId');
  }
}
