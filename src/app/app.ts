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
  /**
   * Application title
   */
  protected readonly title = signal('BTG-fund-management');
  /**
   * Loader active flag
   */
  isActiveLoader: boolean = false;

  /**
   * Constructor
   * @param router Angular Router to handle navigation events
   */
  constructor(private router: Router) {}

  /**
   * OnInit lifecycle hook
   * Subscribes to router events to update loader visibility based on navigation
   * @return void
   */
  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: any) => {
      if (event.url === '/portal-fondos/web/administrar-fondos' || event.url === '/portal-fondos/web') {
        this.isActiveLoader = false;
      }
    });
  }

  /**
   * Detect loader event from child components
   * Updates the loader state when emitted
   * @param event boolean indicating loader status
   * @return void
   */
  detectLoader(event: boolean) {
    this.isActiveLoader = event;
  }
}
