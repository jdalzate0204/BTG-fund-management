import { Component, OnInit, signal } from '@angular/core';
import { HeaderComponent } from './components/molecules/header/header.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/molecules/footer/footer.component';
import { LoaderComponent } from './components/atoms/loader/loader.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, FooterComponent, LoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('BTG-fund-management');
  isActiveLoader: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: any) => {
      if (event.url === '/portal-fondos/web/administrar-fondos' || event.url === '/portal-fondos/web') {
        this.isActiveLoader = false;
      }
    });
  }

  detectLoader(event: boolean) {
    this.isActiveLoader = event;
  }
}
