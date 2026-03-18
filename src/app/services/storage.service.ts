import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  generateRandomNumber(): number {
    return Math.floor(10000000 + Math.random() * 90000000);
  }

  setSession() {
    localStorage.setItem('sessionId', this.generateRandomNumber().toString());
  }

  hasSession(): boolean {
    return !!localStorage.getItem('sessionId');
  }

  deleteSession() {
    localStorage.removeItem('sessionId');
  }
}
