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
  @Output() isActiveLoader = new EventEmitter<boolean>();
  isLoggedIn$: Observable<boolean>;
  balance$: Observable<number>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private balanceService: BalanceService,
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.balance$ = this.balanceService.balance$;
  }

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
