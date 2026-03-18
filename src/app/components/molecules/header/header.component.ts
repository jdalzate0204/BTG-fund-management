import { Component, EventEmitter, Output } from '@angular/core';
import { LogoComponent } from '../../atoms/logo/logo.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { NumberFormatPipe } from '../../../pipes/number-format-pipe';
import { BalanceService } from '../../../services/balance.service';

@Component({
  selector: 'btg-header',
  imports: [LogoComponent, ButtonComponent, AsyncPipe, NumberFormatPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  /**
   * Loader activation event
   */
  @Output() isActiveLoader = new EventEmitter<boolean>();
  /**
   * Observable for user login status
   */
  isLoggedIn$: Observable<boolean>;
  /**
   * Observable for user balance
   */
  balance$: Observable<number>;

  /**
   * Constructor
   * Initializes observables for login status and balance
   * @param router Angular Router to navigate between routes
   * @param authService Authentication service for login/logout
   * @param balanceService Service providing user balance data
   */
  constructor(
    private router: Router,
    private authService: AuthService,
    private balanceService: BalanceService,
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.balance$ = this.balanceService.balance$;
  }

  /**
   * Handle action button click
   * Performs login if user is not logged in, otherwise logs out
   * Navigates to the appropriate route after action
   * @param isLoggedIn boolean indicating if the user is currently logged in
   * @return void
   */
  actionButton(isLoggedIn: boolean) {
    this.isActiveLoader.emit(true);
    if (!isLoggedIn) {
      this.authService.login();
      setTimeout(() => {
        this.router.navigate(['/portal-fondos/web/administrar-fondos']);
      }, 3000);
    } else {
      this.authService.logout();
      setTimeout(() => {
        this.router.navigate(['/portal-fondos/web']);
      }, 3000);
    }
  }
}
